package com.example.BHListing.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.BHListing.model.House;
import com.example.BHListing.service.HouseService;

@RestController
@RequestMapping("/house")
@CrossOrigin
public class HouseController {
	@Autowired
	private HouseService houseService;
	
	@PostMapping("/saveHouse")
	public House saveHouse(@RequestBody House house) {
		return houseService.saveHouse(house);
	}
	
	@GetMapping("/getHouse/{houseId}")
	public House getHouse(@PathVariable String houseId) {
		return houseService.getHouse(houseId);
	}
	
	@PutMapping("/updateHouse/{houseId}")
	public House updateHouse(@RequestBody House house , @PathVariable String houseId) {
		return houseService.updateHouse(house, houseId);
	}
	
	@DeleteMapping("/deleteHouse/{houseId}")
	public String deleteHouse(@PathVariable String houseId) {
		houseService.deleteHouse(houseId);
		return "Deleted Successfully";
	}
	
	@GetMapping("/getAllHouses")
	public List<House> getAllHouses(){
		return houseService.getAllHouses();
	}
}
