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

import com.example.BHListing.model.ADdata;
import com.example.BHListing.service.AdService;


@RestController
@RequestMapping("/ad")
@CrossOrigin
public class AdController {
	
	@Autowired
	private AdService adService; 
	
	@PostMapping("/saveAd")
	public ADdata saveAd(@RequestBody ADdata ad) {
		return adService.saveADdata(ad);
	}
	
	@GetMapping("/getAd/{adId}")
	public ADdata getAd(@PathVariable String adId) {
		return adService.getADdata(adId);
	}
	
	@PutMapping("/updateAd/{adId}")
	public ADdata updateAd(@RequestBody ADdata ad , @PathVariable String adId) {
		return adService.updateADdata(ad, adId);
	}
	
	@DeleteMapping("/deleteAd/{adId}")
	public String deleteAd(@PathVariable String adId) {
		adService.deleteADdata(adId);
		return "Deleted Successfully";
	}
	
	@GetMapping("/getAllAds")
	public List<ADdata> getAllADs(){
		return adService.getAllADdatas();
	}
}
