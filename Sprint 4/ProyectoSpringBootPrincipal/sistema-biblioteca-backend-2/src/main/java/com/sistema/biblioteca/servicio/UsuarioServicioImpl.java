package com.sistema.biblioteca.servicio;

import java.util.List;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistema.biblioteca.modelo.Usuario;
import com.sistema.biblioteca.modelo.UsuarioRol;
import com.sistema.biblioteca.repositorio.RolRepositorio;
import com.sistema.biblioteca.repositorio.UsuarioRepositorio;



@Service
public class UsuarioServicioImpl implements UsuarioServicio{

	@Autowired
	private UsuarioRepositorio usuarioRepositorio;
	
	@Autowired
	private RolRepositorio rolRepositorio;

	@Override
	public Usuario guardarUsuario(Usuario usuario, Set<UsuarioRol> usuarioRoles) throws Exception {
		Usuario usuarioLocal = usuarioRepositorio.findByUsername(usuario.getUsername());
		if(usuarioLocal != null) {
			System.out.println("El usuario ya existe");
			throw new Exception("El usuario ya està presente");
		}else {
			for(UsuarioRol usuarioRol:usuarioRoles){
				rolRepositorio.save(usuarioRol.getRol());
			}
			usuario.getUsuarioRoles().addAll(usuarioRoles);
			usuarioLocal = usuarioRepositorio.save(usuario);
			}
		return usuarioLocal;
	}

	public UsuarioServicioImpl() {
		super();
	}

	public UsuarioServicioImpl(UsuarioRepositorio usuarioRepositorio, RolRepositorio rolRepositorio) {
		super();
		this.usuarioRepositorio = usuarioRepositorio;
		this.rolRepositorio = rolRepositorio;
	}

	@Override
	public Usuario obtenerUsuario(String username) {
		// TODO Auto-generated method stub
		return usuarioRepositorio.findByUsername(username);
	}

	@Override
	public void eliminarUsuario(Long usuarioId) {
		// TODO Auto-generated method stub
		usuarioRepositorio.deleteById(usuarioId);
	}

	@Override
	public List<Usuario> findAll() {
		return usuarioRepositorio.findAll();
		
	}

	@Override
	public Usuario save(Usuario usuario) {
		// TODO Auto-generated method stub
		return null;
	}

	



	

	

	
	
}
