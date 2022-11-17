import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioServicioService } from '../usuario-servicio.service';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  usuarioObtenido: Usuario = new Usuario();
  usuario: Usuario = new Usuario();
  datos: any = [];
  id:number;
 

  constructor(private router:Router, private usuarioservicio: UsuarioServicioService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

  }


  onSubmit(){
    console.log(this.usuario);
    this.actualizarUsuario();
    
  }

/*
obtenerUsuario(username:String){
  this.usuarioservicio.obtenerUsuarioporUsername(this.username).subscribe(dato => {
      console.log(dato);
      this.datos = dato;

      this.usuarioObtenido = {
        id: this.datos.id,
        username: this.datos.username,
        password: this.datos.password,
        nombre: this.datos.nombre,
        apellido: this.datos.apellido,
        telefono: this.datos.telefono,
        email: this.datos.email,
        enabled: this.datos.enabled,
        perfil: this.datos.perfil
         }
 
     }
)}
*/

 actualizarUsuario(){

  this.usuarioservicio.actualizarUsuario(this.id,this.usuario).subscribe({next: (dato) => alert("Usuario actualizado con èxito."), error: (error) => console.log(error) });
 }

}
