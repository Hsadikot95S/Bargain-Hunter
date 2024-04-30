package com.example.BHListing.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.BHListing.model.House;
import com.example.BHListing.repository.HouseRepository;

@Service
public class HouseService {
	
	@Autowired
	private HouseRepository houseRepository;
	
	public House saveHouse(House house) {
		return houseRepository.save(house);
	}
	
	public House getHouse(String houseId) {
		Optional<House> optional = houseRepository.findById(houseId);
		House house = optional.get();
		return house;
	}
	
	public House updateHouse(House house , String houseId) {
		house.setHouseId(houseId);
		return houseRepository.save(house);
	}
	
	public void deleteHouse(String houseId) {
		houseRepository.deleteById(houseId);
	}
	
	public List<House> getAllHouses(){
		return houseRepository.findAll();
	}
}
