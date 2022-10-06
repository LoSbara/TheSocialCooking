package services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import model.User;
import repository.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository repo;
	
	private final String REGEX_PASSWORD="(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$\"";
	
	private final String REGEX_EMAIL="^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";
	
	public User login(String email, String password) {
		User u = repo.login(email, password);
		return u;
	}
	
	public boolean registration(User u) {
		try {
			if(u.getEmail().matches(REGEX_EMAIL) && u.getPassword().matches(REGEX_PASSWORD)) {
				u = repo.save(u);
				return u!=null;
			} else {
				return false;
			}
		} catch (Exception e) {
			return false;
		}
	}
}
