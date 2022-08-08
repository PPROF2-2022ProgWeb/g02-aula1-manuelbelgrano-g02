import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { NgModel } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { throwIfEmpty } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  title = 'Proyectoweb_ispc';
  user = localStorage.getItem("usuario");
  logo = document.querySelector("#log");
  public identificado: boolean;
  public miperfil = document.querySelector("#miperfil");
  public menu : boolean;
  public promoMensual = 300;
  public promoSemestral = 500;
  public promoAnual = 900;
  logueado = localStorage.getItem("usuario");
  promoElegida = localStorage.getItem("precio");
  promo = localStorage.getItem("promo");



  constructor(){
    this.identificado = false;
    this.miperfil = this.miperfil;
    this.menu = false;
    this.promoAnual = this.promoAnual;
    this.promoMensual = this.promoMensual;
    this.promoSemestral = this.promoSemestral;
   this.logueado = this.logueado;
   this.promoElegida = this.promoElegida;
   this.promo = this.promo;
    
  }

 
  abrirMenu(){
    this.menu = true;
  }

  cerrarMenu(){
    this.menu = false;

  }

  cerrarSesion(){
    /*REMOVER DEL LOCALSTORAGE */
    localStorage.removeItem("usuario");
    window.location.href = "http://localhost:4200/home";  
  }


  /*Cada click que haga, me imprimirá en la consola en que ubicación se encuentra*/
  ngOnInit(){
  if(this.user !== null ){
   console.log("Bienvenido!")
   this.identificado = true;  

}


    /*
    this.renderer.listen("document", "click", (e) => {
      console.log(e.clientX);
      console.log(e.clientY);
    });
    */
  }
}


