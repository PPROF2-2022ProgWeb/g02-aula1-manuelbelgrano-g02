import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  
  productos:Producto[];
  

  public item1 = {
    id: 1,
    nombre: "promoMensual",
    precio: 400
  }

  public item2 = {
    id: 2,
    nombre: "promoSemestral",
    precio: 600
  }

  public item3 = {
    id: 3,
    nombre: "promoAnual",
    precio: 900
  }


  constructor(private router:Router, private productoServicio:ProductoService, private httpClient:HttpClient){

  }

  eligePromo(precio:number){
    console.log(precio);
    this.router.navigate(['carrito', precio]);
  }


 
  ngOnInit(): void {
    this.obtenerProductos();
  }


  obtenerProductos(){
    this.productoServicio.obtenerListaProductos().subscribe(dato =>{
      this.productos = dato;
      console.log(this.productos);
    })
  }

}
