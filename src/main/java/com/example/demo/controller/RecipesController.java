package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.demo.model.Recipe;
import com.example.demo.model.User;
import com.example.demo.request.recipe.AddingDTO;
import com.example.demo.request.recipe.IdUserDTO;
import com.example.demo.request.recipe.SearchByNameDTO;
import com.example.demo.request.user.LoginDTO;
import com.example.demo.request.user.RegistrationDTO;
import com.example.demo.response.recipe.RecipeListResponseDTO;
import com.example.demo.services.RecipeService;

public class RecipesController {
	@Autowired
	RecipeService service;
	
	@RequestMapping(method= RequestMethod.POST, path = "/adding")
	public ResponseEntity addingControl(@RequestBody AddingDTO request) {
		if (request.isValid()) {
			Recipe r = new Recipe(request.getImg(),
							  request.getName(),
							  request.getDescription(),
							  request.getIngridients(),
							  request.getUser());
			if (service.adding(r)) {
				return ResponseEntity.status(200).build();
			} else {
				return ResponseEntity.status(409).build();
			}
		} else {
			return ResponseEntity.status(403).build();
		}
	}
	
	@RequestMapping(method= RequestMethod.POST, path = "/search")
	public ResponseEntity<RecipeListResponseDTO> searchControl(@RequestBody SearchByNameDTO request) {
		List<Recipe> list= service.searchByName(request.getName());
		return ResponseEntity.status(200).body(new RecipeListResponseDTO(list));
	}
	
	@RequestMapping(method= RequestMethod.POST, path = "/home")
	public ResponseEntity homeControl() {
		List<Recipe> list = service.postRecipes();
		return ResponseEntity.status(200).build();
	}
	
	@RequestMapping(method= RequestMethod.POST, path = "/profile")
	public ResponseEntity<RecipeListResponseDTO> profileControl(@RequestBody IdUserDTO request) {
		List<Recipe> list = service.postUserRecipes(request.idUser());
		return ResponseEntity.status(200).build();
	}
}
