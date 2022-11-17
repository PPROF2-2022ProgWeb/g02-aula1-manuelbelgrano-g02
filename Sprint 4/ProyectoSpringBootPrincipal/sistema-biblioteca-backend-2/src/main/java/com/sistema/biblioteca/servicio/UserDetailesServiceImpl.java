package com.sistema.biblioteca.servicio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.sistema.biblioteca.modelo.Usuario;
import com.sistema.biblioteca.repositorio.UsuarioRepositorio;

@Service
public class UserDetailesServiceImpl implements UserDetailsService {

	
	@Autowired
	private UsuarioRepositorio  usuarioRepositorio;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		Usuario usuario = this.usuarioRepositorio.findByUsername(username);
		if(usuario == null) {
			throw new UsernameNotFoundException("Usuario NO encontrado");
		}
		return usuario;
	}

}
