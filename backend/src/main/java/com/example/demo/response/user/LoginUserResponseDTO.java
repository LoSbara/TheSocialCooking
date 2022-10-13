package com.example.demo.response.user;

public class LoginUserResponseDTO {
	private long id;

	public LoginUserResponseDTO() {
		super();
	}

	public LoginUserResponseDTO(long id) {
		super();
		this.id = id;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
}
