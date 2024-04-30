package com.example.BHListing.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(value="Houses")
public class House {
	
	@Id
	private String houseId;
	
	private String houseType;
	private String houseDescription;
	private int bedrooms;
	private int baths;
	
	private int area;
	private String itemImageURL;
	private int pincode;
	private String address;
	private int price;
	
	
	public House(String houseId, String houseType, String houseDescription, int bedrooms, int baths, int area,
			String itemImageURL, int pincode, String address , int price) {
		super();
		this.houseId = houseId;
		this.houseType = houseType;
		this.houseDescription = houseDescription;
		this.bedrooms = bedrooms;
		this.baths = baths;
		this.area = area;
		this.itemImageURL = itemImageURL;
		this.pincode = pincode;
		this.address = address;
		this.price = price;
	}


	public House() {
		super();
	}


	public int getPrice() {
		return price;
	}


	public void setPrice(int price) {
		this.price = price;
	}


	public String getHouseId() {
		return houseId;
	}


	public void setHouseId(String houseId) {
		this.houseId = houseId;
	}


	public String getHouseType() {
		return houseType;
	}


	public void setHouseType(String houseType) {
		this.houseType = houseType;
	}


	public String getHouseDescription() {
		return houseDescription;
	}


	public void setHouseDescription(String houseDescription) {
		this.houseDescription = houseDescription;
	}


	public int getBedrooms() {
		return bedrooms;
	}


	public void setBedrooms(int bedrooms) {
		this.bedrooms = bedrooms;
	}


	public int getBaths() {
		return baths;
	}


	public void setBaths(int baths) {
		this.baths = baths;
	}


	public int getArea() {
		return area;
	}


	public void setArea(int area) {
		this.area = area;
	}


	public String getItemImageURL() {
		return itemImageURL;
	}


	public void setItemImageURL(String itemImageURL) {
		this.itemImageURL = itemImageURL;
	}


	public int getPincode() {
		return pincode;
	}


	public void setPincode(int pincode) {
		this.pincode = pincode;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}
	
	
	
	
}
