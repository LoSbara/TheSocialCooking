package com.example.demo.validation;

public interface RegexValidation {

 String REGEX_PASSWORD="^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\\d]){1,})(?=(.*[\\W]){1,})(?!.*\\s).{8,}$";
	
 String REGEX_EMAIL="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$";
	
	
}
