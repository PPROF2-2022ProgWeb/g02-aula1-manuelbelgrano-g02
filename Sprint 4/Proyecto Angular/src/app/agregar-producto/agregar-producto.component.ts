import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  producto:Producto = new Producto();

  constructor(private productoServicio:ProductoService, private httpClient:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.productoServicio.añadirProducto(this.producto).subscribe({next: (dato) =>alert("Producto registrado con èxito"), error: (error) => console.log(error) });

  }



}
