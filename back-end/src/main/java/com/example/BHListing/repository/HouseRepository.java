package com.example.BHListing.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.BHListing.model.House;

@Repository
public interface HouseRepository extends MongoRepository<House, String> {

}
