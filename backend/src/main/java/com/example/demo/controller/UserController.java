package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.request.user.LoginDTO;
import com.example.demo.request.user.RegistrationDTO;
import com.example.demo.response.user.LoginUserResponseDTO;
import com.example.demo.services.UserService;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {
	@Autowired
	UserService service;
	
	@RequestMapping(method= RequestMethod.POST, path = "/login")
	public ResponseEntity loginControl(@RequestBody LoginDTO request) {
		if (request.isValid()) {
			User u = service.login(request.getEmail(), request.getPassword());
			if (u == null) {
				return ResponseEntity.status(409).build();
			} else {
				return ResponseEntity.status(200).build();
			}
		} else {
			return ResponseEntity.status(403).build();
		}
	}
	
//	@RequestMapping(method = RequestMethod.POST, path = "/registration", consumes = MediaType.APPLICATION_JSON_VALUE)
//	public void registrationControl() {
//		
//		System.out.println("begin registration");
//	}
	
	
	@RequestMapping(method = RequestMethod.POST, path = "/registration", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<LoginUserResponseDTO> registrationControl(@RequestBody RegistrationDTO request) {
		
		System.out.println("begin registration");
		
		
		if (!request.isValid()) {
			System.out.println("not valid");
			
			return ResponseEntity.status(403).build();
		}
		
		User u = new User(
		  request.getFullName(),
		  request.getEmail(),
		  request.getPassword(),
		  request.getRepeatPassword());
		if (service.registration(u)) {
			System.out.println("registered");
			
			return ResponseEntity.status(200).body(new LoginUserResponseDTO(u.getId()));
		}
		System.out.println("not registered");
		
		return ResponseEntity.status(409).build();
	}
}
