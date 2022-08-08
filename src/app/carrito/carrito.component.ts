import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  public promoMensual = 300;
  public promoSemestral = 500;
  public promoAnual = 900;
  logueado = localStorage.getItem("usuario");
  promoElegida = localStorage.getItem("precio");
  promo = localStorage.getItem("promo");

  constructor() {
    this.promoAnual = this.promoAnual;
    this.promoMensual = this.promoMensual;
    this.promoSemestral = this.promoSemestral;
    this.logueado = this.logueado;
    this.promoElegida = this.promoElegida;
    this.promo = this.promo;
  }

  ngOnInit(): void {

    if( this.logueado == null){
      window.location.href = "http://localhost:4200/login";  
    }

  }
}
  

 



