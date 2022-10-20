package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.validation.RegexValidation;

@Service
public class UserService {
	@Autowired
	UserRepository repo;
	
	public User login(String email, String password) {
		User u = repo.login(email, password);
		return u;
	}
	
	public boolean registration(User u) {
		try {
			System.out.println(u);
			
			if(u.getEmail().matches(RegexValidation.REGEX_EMAIL) && 
					u.getPassword().matches(RegexValidation.REGEX_PASSWORD)) {
				u = repo.save(u);
				return u!=null;
			} else {
				return false;
			}
		} catch (Exception e) {
			return false;
		}
	}
}
