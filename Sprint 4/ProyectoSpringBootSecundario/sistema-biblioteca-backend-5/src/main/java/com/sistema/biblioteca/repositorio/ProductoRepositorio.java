package com.sistema.biblioteca.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistema.biblioteca.modelo.Producto;


@Repository
public interface ProductoRepositorio extends JpaRepository<Producto, Long>{

}
