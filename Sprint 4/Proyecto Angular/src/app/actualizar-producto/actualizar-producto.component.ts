import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {

  productoId:number;
  producto: Producto = new Producto();
  validarCamposVacios:boolean;

  constructor(private router:Router, private productoservicio: ProductoService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.productoId = this.route.snapshot.params['productoId'];
    console.log(this.productoId);
  }

  onSubmit(){

    if(this.producto.nombreProducto == '' || this.producto.nombreProducto == null || this.producto.descripcion == '' ||  this.producto.descripcion == null ){
      this.validarCamposVacios = true;
   }else{
    this.validarCamposVacios = false;
   };


    this.productoservicio.actualizarProducto(this.productoId, this.producto).subscribe({next: (dato:any) => alert("Usuario actualizado con èxito."), error: (error:any) => console.log(error) });
 
 
  }
 
 
  }

