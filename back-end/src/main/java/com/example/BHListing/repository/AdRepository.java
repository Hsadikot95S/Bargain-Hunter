package com.example.BHListing.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.BHListing.model.ADdata;

@Repository
public interface AdRepository extends MongoRepository<ADdata, String> {

}
