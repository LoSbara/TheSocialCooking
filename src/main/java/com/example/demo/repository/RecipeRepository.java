package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Recipe;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Long>{
	
	@Query("select r from Recipe r where r.user.id = :idUser")
	public List<Recipe> listRecipes(long idUser);
	
	@Query("select r from Recipe r")
	public List<Recipe> listRecipes();

	@Query("select r form Recipe r where r.name = :name")
	public List<Recipe> searchRecipesByName(String name);
}
