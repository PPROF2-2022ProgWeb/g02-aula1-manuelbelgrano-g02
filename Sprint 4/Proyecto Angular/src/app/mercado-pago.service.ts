import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MercadoPagoService {

  private URL = "http://localhost/ProyectoPasarelaPago/mercadopago.php";

  constructor(private http:HttpClient) { }



}
