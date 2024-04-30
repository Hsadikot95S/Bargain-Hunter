package com.example.BHListing.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.BHListing.model.User;
import com.example.BHListing.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public User saveUser(User user) {
		
		return userRepository.save(user);
	}
	
	public User findByEmail(String email) {
		
		return userRepository.findByemail(email);
	}
}
