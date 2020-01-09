/**
 * 
 */
package com.bolsadeideas.springboot.backend.apirest.models.services;

import com.bolsadeideas.springboot.backend.apirest.models.entity.Usuario;

/**
 * @author SET
 *
 */
public interface IUsuarioService {
	
	public Usuario findByUsername(String username);
	
}
