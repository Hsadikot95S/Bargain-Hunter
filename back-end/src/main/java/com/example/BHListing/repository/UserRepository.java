package com.example.BHListing.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.BHListing.model.User;

public interface UserRepository extends MongoRepository<User, String> {
	
	User findByemail(String email);
}
