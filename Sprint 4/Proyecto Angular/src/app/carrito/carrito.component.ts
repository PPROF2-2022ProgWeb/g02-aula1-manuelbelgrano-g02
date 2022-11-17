import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  precio:number;
  producto:Producto = new Producto();
  productos:Producto[];
  promo:any;
  hayLogin:boolean;

  constructor(private route:ActivatedRoute, private productoServicio:ProductoService, private httpClien:HttpClient,
    private router:Router) {
  
  }

  ngOnInit(): void {
  
    var identificado = localStorage.getItem("token");

          if(identificado == null  || identificado == 'undefined' ){
            this.router.navigate(['login']);
          }
   
    this.precio = this.route.snapshot.params['precio'];
    console.log(this.precio);


    if(this.precio == 400){
      this.promo = "Suscripciòn MENSUAL";
    }else if(this.precio == 600){
      this.promo = "Suscripciòn SEMESTRAL";
    }else if(this.precio == 900){
      this.promo = "Suscripciòn ANUAL";
    }

  }

  



}




