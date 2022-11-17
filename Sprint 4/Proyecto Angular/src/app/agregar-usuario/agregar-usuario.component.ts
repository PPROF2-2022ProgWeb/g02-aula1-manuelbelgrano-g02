import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioServicioService } from '../usuario-servicio.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  validarCamposVacios:boolean;

  constructor(private usuarioServicio:UsuarioServicioService) { }

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

}
}
