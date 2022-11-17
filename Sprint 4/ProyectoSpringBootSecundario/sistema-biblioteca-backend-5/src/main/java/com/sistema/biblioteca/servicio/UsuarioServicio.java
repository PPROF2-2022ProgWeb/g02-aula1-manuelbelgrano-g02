package com.sistema.biblioteca.servicio;

import java.util.List;

import java.util.Set;


import com.sistema.biblioteca.modelo.Usuario;
import com.sistema.biblioteca.modelo.UsuarioRol;

public interface UsuarioServicio {
	

	
	public Usuario guardarUsuario(Usuario usuario, Set<UsuarioRol> usuarioRoles) throws Exception;
	
	
	public Usuario obtenerUsuario(String username);
	
	public void eliminarUsuario(Long usuarioId);

	public List<Usuario> findAll();

	public Usuario save(Usuario usuario);



	
}
