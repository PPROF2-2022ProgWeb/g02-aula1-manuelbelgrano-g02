package com.sistema.biblioteca.repositorio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistema.biblioteca.modelo.Usuario;

@Repository
public interface UsuarioRepositorio  extends JpaRepository<Usuario, Long>{

	public  Usuario findByUsername(String username);
	
	public List<Usuario> findAll();
	


}
