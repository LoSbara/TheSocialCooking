package request.user;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class LoginDTO {
	private String email, password;

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
	
	@JsonIgnore
	public boolean isValid() {
		return !email.isEmpty() && !password.isEmpty();
	}
}
