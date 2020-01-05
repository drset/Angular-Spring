/**
 * 
 */
package com.bolsadeideas.springboot.backend.apirest.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 * @author SET
 *
 */
@Configuration
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter{
	
	@Autowired //It will automatically use the one we created because it is the only one.
	private UserDetailsService usuarioService;

	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Override
	@Autowired
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(this.usuarioService).passwordEncoder(passwordEncoder());
	}

	@Override
	@Bean
	protected AuthenticationManager authenticationManager() throws Exception {
		// TODO Auto-generated method stub
		return super.authenticationManager();
	}
	
	@Override
	public void configure(HttpSecurity http) throws Exception {
		
		//THIS MANAGES PERMISION AT PATH LEVEL BY SPRING SECURITY
		//DISABLE CSRF BECAUSE WE USE ANGULAR
		//DISABLE SESSION MANAGMENT BECAUSE WE ARE USING TOKENS FOR THAT
		http.authorizeRequests()
		.anyRequest().authenticated()
		.and().csrf().disable()
		.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	}
	
}//end Class
