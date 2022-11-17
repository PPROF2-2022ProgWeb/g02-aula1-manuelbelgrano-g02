import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioServicioService } from '../usuario-servicio.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario = new Usuario();
  validarCamposVacios:boolean;
 


  constructor(private usuarioServicio:UsuarioServicioService, private router:Router) {
    
   }

  ngOnInit(): void {
  }

  onSubmit(){
    
    if(this.usuario.username == '' || this.usuario.username == null || this.usuario.password == null || this.usuario.password== ''
    || this.usuario.nombre == null || this.usuario.nombre == '' || this.usuario.apellido == null || this.usuario.apellido == ''
    || this.usuario.email == null || this.usuario.email == '' || this.usuario.telefono == null || this.usuario.telefono == ''){
      this.validarCamposVacios = true;
   }else{
    this.validarCamposVacios = false;
   };



 
    console.log(this.usuario);
    this.usuarioServicio.registrarUsuario(this.usuario).subscribe({next: (dato) =>console.log(dato), error: (error) => console.log(error) });

    alert("Usuario registrado con èxito");
    this.router.navigate(['./login']);
}

}
