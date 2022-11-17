import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { Producto } from 'src/app/producto';
import { ProductoService } from 'src/app/producto.service';
import { Usuario } from 'src/app/usuario';
import { UsuarioServicioService } from 'src/app/usuario-servicio.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usuarios:Usuario[];
  productos:Producto[];
  usuario = new Usuario();

  constructor(private loginService: LoginService, private usuarioServicio:UsuarioServicioService, private router:Router,
    private productoServicio: ProductoService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
    this.obtenerProductos();
  }


  private obtenerUsuarios(){
    this.usuarioServicio.obtenerListaUsuarios().subscribe(dato =>{
      this.usuarios = dato;
      console.log(this.usuarios);
    })
  }

  actualizarUsuario(id:number){
    console.log(id);
    this.router.navigate(['actualizarusuario', id]);
  }
  
  eliminarUsuario(id:number){
    this.usuarioServicio.eliminarUsuario(id).subscribe(dato => {
      console.log(dato);
     alert("El usuario  ha sido eliminado");
    });

  }

  private obtenerProductos(){
    this.productoServicio.obtenerListaProductos().subscribe(dato =>{
      this.productos = dato;
      console.log(this.productos);
    })
  }


  eliminarProducto(productoId:number){
    this.productoServicio.eliminarProducto(productoId).subscribe(dato => {
      console.log(dato);
     alert("El producto  ha sido eliminado");
    });
  }

  agregarProducto(){
    this.router.navigate(['agregarproducto']);
  }

  actualizarProducto(productoId:number){
    this.router.navigate(['actualizarproducto', productoId]);
  }

  agregaUsuario(){
    this.router.navigate(['agregarusuario']);
  }

}
