package com.sistema.biblioteca.controlador;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sistema.biblioteca.modelo.Rol;
import com.sistema.biblioteca.modelo.Usuario;
import com.sistema.biblioteca.modelo.UsuarioRol;
import com.sistema.biblioteca.servicio.UsuarioServicio;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:4200/")
public class registroControlador {


	@Autowired
	private UsuarioServicio usuarioServicio;
	
	@PostMapping("/registro")
	public Usuario registrarUsuario(@RequestBody Usuario usuario) throws Exception{
		
		    
	        Set<UsuarioRol> usuarioRoles = new HashSet<>();

	        Rol rol = new Rol();
	        rol.setId(2L);
	        rol.setNombre("NORMAL");

	        UsuarioRol usuarioRol = new UsuarioRol();
	        usuarioRol.setUsuario(usuario);
	        usuarioRol.setRol(rol);

	        usuarioRoles.add(usuarioRol);
	        return usuarioServicio.guardarUsuario(usuario,usuarioRoles);
	}
	
}
