package response.recipe;

import java.util.List;

import model.Recipe;

public class RecipeListResponseDTO {
	private List<Recipe> list;

	public RecipeListResponseDTO() {
		super();
	}

	public RecipeListResponseDTO(List<Recipe> list) {
		super();
		this.list = list;
	}

	public List<Recipe> getList() {
		return list;
	}

	public void setList(List<Recipe> list) {
		this.list = list;
	}
	
}
