package com.sistema.biblioteca.controlador;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pagos")
@CrossOrigin
public class MercadoPagoController {
		
	public String respuesta = "Bienvenido al backend";

	@GetMapping("/muestra")
	public void muestra() {
		System.out.println(respuesta);
	}
}
