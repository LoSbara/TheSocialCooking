package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.model.Recipe;
import com.example.demo.repository.RecipeRepository;

public class RecipeService{
	@Autowired
	RecipeRepository repo;
	
	public boolean adding(Recipe r) {
		try {
			r = repo.save(r);
			return r!=null;
		} catch (Exception e) {
			return false;
		}
	}
	
	public List<Recipe> searchByName(String name) {
		List<Recipe> list = repo.searchRecipesByName(name);
		return list;
	}
	
	public List<Recipe> postRecipes() {
		List<Recipe> list = repo.listRecipes();
		return list;
	}
	
	public List<Recipe> postUserRecipes(long idUser) {
		List<Recipe> list = repo.listRecipes(idUser);
		return list;
	}
}