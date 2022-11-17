package com.sistema.biblioteca.controlador;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sistema.biblioteca.modelo.Producto;
import com.sistema.biblioteca.modelo.Usuario;
import com.sistema.biblioteca.repositorio.ProductoRepositorio;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200/")
public class ProductoControlador {
	
	@Autowired
	private ProductoRepositorio repositorio;
	
	

	@GetMapping("/productos")
	public List<Producto> listarTodosLosProductos(){
	return repositorio.findAll();
	}
	
	@PostMapping("/productos")
	public Producto guardarProducto(@RequestBody Producto producto) throws Exception{
		return repositorio.save(producto);
	}
	
	@DeleteMapping("/productos/{productoId}")
	public void  eliminarProducto(@PathVariable("productoId") Long productoId) {
	 repositorio.deleteById(productoId);
	}
	
	@PutMapping("/productos/{productoId}")
	public ResponseEntity<Producto> actualizarProducto(@PathVariable Long productoId, @RequestBody Producto detallesProducto){
		
		
		Producto producto = repositorio.findById(productoId)
				.orElseThrow();
						
		producto.setProductoId(detallesProducto.getProductoId());
		producto.setNombreProducto(detallesProducto.getNombreProducto());
		producto.setDescripcion(detallesProducto.getDescripcion());
		producto.setPrecio(detallesProducto.getPrecio());
		
				
		Producto productoActualizado = repositorio.save(producto);
		return ResponseEntity.ok(productoActualizado);
		
	}
	
	
	

}
