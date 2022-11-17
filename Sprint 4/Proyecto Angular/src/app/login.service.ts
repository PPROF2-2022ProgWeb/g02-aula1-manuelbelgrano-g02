import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = "http://localhost:8080";

  constructor(private http:HttpClient) { }

  public generateToken(loginData:any){
  return this.http.post(`${this.baseURL}/generate-token`, loginData);
  }

  public loginUser(token:any){
    localStorage.setItem('token', token);
  }


  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' ||  tokenStr == null ){
      return false;
    }else{
      return true;
    }
  }

  //Cerramos sesiòn y eliminamos el token
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }


  //obtenemos el token
  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user:any){
    localStorage.setItem('user', JSON.stringify(user));
  }


  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr != null ){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  public getUserRol(){
  let user = this.getUser();
  return user.authorities[0].authority;
  }


  public getCurrentUser(){
    return this.http.get(`${this.baseURL}/api/v1/actual-usuario`);
  }




}
