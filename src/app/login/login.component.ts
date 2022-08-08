import { Component, ElementRef,Renderer2, OnInit, ViewChild} from '@angular/core';
import { Usuario } from '../models/usuario';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit{

 signupForm: FormGroup;
 public boton: boolean;
  
  constructor(private _builder: FormBuilder){
    
    this.boton = true;

    this.signupForm = this._builder.group({
     usuario: ['', Validators.required],
     clave:['', Validators.required]
   })


  }

  enviar(values: any){
    console.log(values);
    localStorage.setItem("usuario", JSON.stringify(values));
       
    this.boton = false;
    if (this.boton == false){
      window.location.href = "http://localhost:4200/home";  
    }
  }





  ngOnInit(): void {
 


  }





}