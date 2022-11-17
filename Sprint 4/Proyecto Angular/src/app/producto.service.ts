import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseURL = "http://localhost:8090/api/v1/productos";

  constructor(private httpClient: HttpClient) { }


  añadirProducto(producto: Producto): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, producto);
   }

   obtenerListaProductos():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.baseURL}`)
  }

  actualizarProducto(productoId:number, producto:Producto): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${productoId}`, producto);
  }

  eliminarProducto(productoId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${productoId}`);
  }
  
}
