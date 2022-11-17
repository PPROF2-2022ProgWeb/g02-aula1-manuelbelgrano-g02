package com.sistema.biblioteca.controlador;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.sistema.biblioteca.modelo.Usuario;

import com.sistema.biblioteca.repositorio.UsuarioRepositorio;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200/")
public class UsuarioControlador {

	
	@Autowired
	private UsuarioRepositorio repositorio;
	
	
	@PutMapping("/usuarios/{id}")
	public ResponseEntity<Usuario> actualizarUsuario(@PathVariable Long id, @RequestBody Usuario detallesUsuario){
		
		
		Usuario usuario = repositorio.findById(id).orElseThrow();
						
		usuario.setId(detallesUsuario.getId());
		usuario.setUsername(detallesUsuario.getUsername());
		usuario.setPassword(detallesUsuario.getPassword());
		usuario.setApellido(detallesUsuario.getApellido());
		usuario.setNombre(detallesUsuario.getNombre());
		usuario.setTelefono(detallesUsuario.getTelefono());
		usuario.setEmail(detallesUsuario.getEmail());
				
		Usuario usuarioregActualizado = repositorio.save(usuario);
		return ResponseEntity.ok(usuarioregActualizado);
		
	}




}
