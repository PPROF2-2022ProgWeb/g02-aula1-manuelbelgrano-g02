package com.sistema.biblioteca.controlador;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

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

import com.sistema.biblioteca.modelo.Rol;
import com.sistema.biblioteca.modelo.Usuario;
import com.sistema.biblioteca.modelo.UsuarioRol;

import com.sistema.biblioteca.servicio.UsuarioServicio;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200/")
public class UsuarioControlador {

	
	@Autowired
	private UsuarioServicio usuarioServicio;
	
	
	
	@GetMapping("/usuarios")
	public List<Usuario> listarTodosLosUsuarios(){
	return usuarioServicio.findAll();
	}
	

	@PostMapping("/usuarios")
	public Usuario guardarUsuario(@RequestBody Usuario usuario) throws Exception{
		
		    
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
	
	@GetMapping("/usuarios/{username}")
	public Usuario obtenerUsuario(@PathVariable("username") String username) {
		
		return usuarioServicio.obtenerUsuario(username);		
	}
	
		
	
	@DeleteMapping("/usuarios/{usuarioId}")
	public void  eliminarUsuario(@PathVariable("usuarioId") Long usuarioId) {
	 usuarioServicio.eliminarUsuario(usuarioId);
	}
	
	
	

	@PutMapping("/usuarios/{username}")
	public ResponseEntity<Usuario> actualizarUsuario(@PathVariable String username, @RequestBody Usuario detallesUsuario){
		
		
		Usuario usuario = usuarioServicio.obtenerUsuario(username).orElseThrow(detallesUsuario);
						
		usuario.setId(detallesUsuario.getId());
		usuario.setUsername(detallesUsuario.getUsername());
		usuario.setPassword(detallesUsuario.getPassword());
		usuario.setApellido(detallesUsuario.getApellido());
		usuario.setNombre(detallesUsuario.getNombre());
		usuario.setApellido(detallesUsuario.getApellido());
		usuario.setTelefono(detallesUsuario.getTelefono());
		usuario.setEmail(detallesUsuario.getEmail());
				
		Usuario usuarioregActualizado = usuarioServicio.save(usuario);
		return ResponseEntity.ok(usuarioregActualizado);
		
	}




}
