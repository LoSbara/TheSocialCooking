package com.example.demo.request.recipe;

import com.example.demo.model.User;

public class IdUserDTO {
	private User user;

	public IdUserDTO() {
		super();
	}

	public IdUserDTO(User user) {
		super();
		this.user = user;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	public long idUser() {
		return user.getId();
	}
}
