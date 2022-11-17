import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServicioService {

  private baseURL = "http://localhost:8080/api/v1/";

  private baserURL = "http://localhost:8090/api";

  constructor(private httpClient: HttpClient) {
   
   }

   añadirUsuario(usuario: Usuario): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}usuarios`, usuario);
   }

   obtenerListaUsuarios():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseURL}usuarios/`)
  }

  actualizarUsuario(id:number, usuario:Usuario): Observable<Object>{
    return this.httpClient.put(`${this.baserURL}/v1/usuarios/${id}`, usuario);
  }

  eliminarUsuario(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}usuarios/${id}`);
  }

  obtenerUsuarioporUsername(username:String): Observable<Object>{
    return this.httpClient.get<Usuario>(`${this.baseURL}usuarios/${username}`);

  }


  registrarUsuario(usuario: Usuario): Observable<Object>{
    return this.httpClient.post(`${this.baserURL}/registro`, usuario);
   }




}
