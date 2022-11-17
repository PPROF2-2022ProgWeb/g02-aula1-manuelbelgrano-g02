package com.sistema.biblioteca.controlador;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sistema.biblioteca.configuracion.JwtUtils;
import com.sistema.biblioteca.modelo.JwtRequest;
import com.sistema.biblioteca.modelo.JwtResponse;
import com.sistema.biblioteca.modelo.Usuario;
import com.sistema.biblioteca.servicio.UserDetailesServiceImpl;

@RestController
@CrossOrigin("*")
public class AuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserDetailesServiceImpl userDetailsService;
	
	@Autowired
	private JwtUtils jwtUtils;
	
	
	@PostMapping("/generate-token")
	public ResponseEntity<?> generarToken(@RequestBody JwtRequest jwtRequest) throws Exception{
		try {
			autenticar(jwtRequest.getUsername(),jwtRequest.getPassword());
		}catch(Exception exception){
			exception.printStackTrace();
			throw new Exception ("Usuario NO encontrado");
		}
		
		UserDetails userDetails = this.userDetailsService.loadUserByUsername(jwtRequest.getUsername());
		String token = this.jwtUtils.generateToken(userDetails);
		return ResponseEntity.ok(new JwtResponse(token));
	}
	
	private void autenticar(String username, String password) throws Exception{
	try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		}catch(DisabledException disabledException){
			throw new Exception("USUARIO DESHABILITADO" + disabledException.getMessage());
		}catch(BadCredentialsException badCredentialsException){
			throw new Exception("CREDENCIALES INVALIDAS" + badCredentialsException.getMessage());
		}
	}
	
	@GetMapping("/api/v1/actual-usuario")
	public Usuario obtenerUsuarioActual(Principal principal) {
	return (Usuario) this.userDetailsService.loadUserByUsername(principal.getName());
	
	}
}
