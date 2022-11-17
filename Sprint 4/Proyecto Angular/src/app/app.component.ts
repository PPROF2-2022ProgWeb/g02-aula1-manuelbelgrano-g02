import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'biblioteca_frontend';
  hayLogin:boolean;

constructor(private router:Router, private loginService:LoginService){

}


ngOnInit(): void {
var identificado = localStorage.getItem("token");

if(identificado !== null){
  this.hayLogin = true;
}else{
  this.hayLogin = false;
}

}


  iraLogin(){
    this.router.navigate(['./login']);
  }

  iraRegistro(){
    this.router.navigate(['./registro']);
  }


  public logout(){
    this.loginService.logout();
    window.location.reload();
    localStorage.removeItem("token");
    localStorage.removeItem("user");

  }
}
