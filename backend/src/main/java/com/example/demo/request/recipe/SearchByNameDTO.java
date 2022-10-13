package com.example.demo.request.recipe;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class SearchByNameDTO {
	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	@JsonIgnore
	public boolean isValid() {
		return !name.isEmpty();
	}
}
