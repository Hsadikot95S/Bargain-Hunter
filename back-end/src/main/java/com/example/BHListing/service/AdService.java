package com.example.BHListing.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.BHListing.model.ADdata;
import com.example.BHListing.repository.AdRepository;

@Service
public class AdService {
	
	@Autowired
	private AdRepository adRepository;
	
	public ADdata saveADdata(ADdata addata) {
		return adRepository.save(addata);
	}
	
	public ADdata getADdata(String addataId) {
		Optional<ADdata> optional = adRepository.findById(addataId);
		ADdata ADdata = optional.get();
		return ADdata;
	}
	
	public ADdata updateADdata(ADdata addata , String addataId) {
		addata.setAdId(addataId);
		return adRepository.save(addata);
	}
	
	public void deleteADdata(String ADdataId) {
		adRepository.deleteById(ADdataId);
	}
	
	public List<ADdata> getAllADdatas(){
		return adRepository.findAll();
	}
}