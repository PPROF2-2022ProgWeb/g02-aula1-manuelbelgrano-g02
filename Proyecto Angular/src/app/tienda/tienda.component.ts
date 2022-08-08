import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  
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


   /*ELIGE LA PROMO*/
   eligePromo1(){
    if( this.logueado == null){
      alert("Debes iniciar sesion para continuar");
      window.location.href = "http://localhost:4200/login";  
    }else{
      localStorage.setItem("promo", "PROMO MENSUAL");
      localStorage.setItem("precio", "300");
    }
   }

   
   eligePromo2(){
    if( this.logueado == null){
      alert("Debes iniciar sesion para continuar");
      window.location.href = "http://localhost:4200/login";  
    }else{
      localStorage.setItem("promo", "PROMO SEMESTRAL");
    localStorage.setItem("precio", "500");
    }
   }

   eligePromo3(){
    if( this.logueado == null){
      alert("Debes iniciar sesion para continuar");
      window.location.href = "http://localhost:4200/login";  
    }else{
      localStorage.setItem("promo", "PROMO ANUAL");
      localStorage.setItem("precio", "900");
    }
   }
 
  ngOnInit(): void {
  }

}
