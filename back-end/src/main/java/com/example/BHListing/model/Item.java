package com.example.BHListing.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(value="Items")
public class Item {
	
	@Id
	private String itemId;
	
	private String category;
	private String type;
	private String title;
	private String description;
	private String add_photos;
	private String add_videos;
	private String location;
	private double price;
	private String phone_number;
	private String remail;
	public Item(String itemId, String category, String type, String title, String description, String add_photos,
			String add_videos, String location, double price, String phone_number, String remail) {
		super();
		this.itemId = itemId;
		this.category = category;
		this.type = type;
		this.title = title;
		this.description = description;
		this.add_photos = add_photos;
		this.add_videos = add_videos;
		this.location = location;
		this.price = price;
		this.phone_number = phone_number;
		this.remail = remail;
	}
	public String getItemId() {
		return itemId;
	}
	public void setItemId(String itemId) {
		this.itemId = itemId;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getAdd_photos() {
		return add_photos;
	}
	public void setAdd_photos(String add_photos) {
		this.add_photos = add_photos;
	}
	public String getAdd_videos() {
		return add_videos;
	}
	public void setAdd_videos(String add_videos) {
		this.add_videos = add_videos;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getPhone_number() {
		return phone_number;
	}
	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}
	public String getRemail() {
		return remail;
	}
	public void setRemail(String remail) {
		this.remail = remail;
	}
	
	  
	
	
	
}
