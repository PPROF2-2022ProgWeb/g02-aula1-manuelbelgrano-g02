import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    "username" : '',
    "password" : ''
  }

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }


  onSubmit(){
    if(this.loginData.username.trim() == '' || this.loginData.username.trim() == null ){
       alert("Debe ingresar todos los datos");
    };
  
    this.loginService.generateToken(this.loginData).subscribe(
      (data:any) => {

        console.log(data); 
        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user:any)=> {
          this.loginService.setUser(user);
          console.log(user);

          if(this.loginService.getUserRol() == "ADMIN"){
            window.location.href = '/admin';
          }else if(this.loginService.getUserRol() == "NORMAL"){
            window.location.href = '/user';
          }else{
            this.loginService.logout();
          }

        })
      }, (error) => {
        console.log(error);
        alert("Detalles invalidos, vuelva a intentarlo");
      }
     )
    }


  
}
