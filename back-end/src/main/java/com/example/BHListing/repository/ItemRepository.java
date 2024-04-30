package com.example.BHListing.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.BHListing.model.Item;

@Repository
public interface ItemRepository extends MongoRepository<Item, String>{

}
