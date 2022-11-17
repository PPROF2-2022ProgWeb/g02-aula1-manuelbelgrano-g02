package com.sistema.biblioteca.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistema.biblioteca.modelo.Rol;

@Repository
public interface RolRepositorio extends JpaRepository<Rol, Long>{

}
