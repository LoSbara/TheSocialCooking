package request.recipe;

import java.io.File;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import model.User;

public class AddingDTO {
	private File img;
	private String name, description;
	private List<String> ingridients;
	private User user;
	
	public File getImg() {
		return img;
	}
	public void setImg(File img) {
		this.img = img;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<String> getIngridients() {
		return ingridients;
	}
	public void setIngridients(List<String> ingridients) {
		this.ingridients = ingridients;
	}
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	@JsonIgnore
	public boolean isValid() {
		return img.exists() && !name.isEmpty() && !description.isEmpty() 
				&& !ingridients.isEmpty();
	}
}
