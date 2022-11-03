package com.example.demo.request.user;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class RegistrationDTO {
	private String fullName, email, password, repeatPassword;

	public RegistrationDTO(){
		
	}
	
	public RegistrationDTO(String fullName, String email, String password, String repeatPassword) {
		super();
		this.fullName = fullName;
		this.email = email;
		this.password = password;
		this.repeatPassword = repeatPassword;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRepeatPassword() {
		return repeatPassword;
	}

	public void setRepeatPassword(String repeatPassword) {
		this.repeatPassword = repeatPassword;
	}
	
	@JsonIgnore
	public boolean isValid() {
		return !fullName.isEmpty() && !email.isEmpty() && !password.isEmpty() 
				&& !repeatPassword.isEmpty() && password.equals(repeatPassword);
	}
}
