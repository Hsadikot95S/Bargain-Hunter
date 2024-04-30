package com.example.BHListing.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(value="ADData")
public class ADdata {
	
	@Id
	private String adId;
	
	private String adTitle;
	private String adDescription;
	private String adPlan;
	private String adDisplayDays;
	private String[] adPhotos;
	private String[] adVideos;
	
	public ADdata(String adId, String adTitle, String adDescription, String adPlan, String adDisplayDays,
			String[] adPhotos, String[] adVideos) {
		super();
		this.adId = adId;
		this.adTitle = adTitle;
		this.adDescription = adDescription;
		this.adPlan = adPlan;
		this.adDisplayDays = adDisplayDays;
		this.adPhotos = adPhotos;
		this.adVideos = adVideos;
	}
	public String getAdId() {
		return adId;
	}
	public void setAdId(String adId) {
		this.adId = adId;
	}
	public String getAdTitle() {
		return adTitle;
	}
	public void setAdTitle(String adTitle) {
		this.adTitle = adTitle;
	}
	public String getAdDescription() {
		return adDescription;
	}
	public void setAdDescription(String adDescription) {
		this.adDescription = adDescription;
	}
	public String getAdPlan() {
		return adPlan;
	}
	public void setAdPlan(String adPlan) {
		this.adPlan = adPlan;
	}
	public String getAdDisplayDays() {
		return adDisplayDays;
	}
	public void setAdDisplayDays(String adDisplayDays) {
		this.adDisplayDays = adDisplayDays;
	}
	public String[] getAdPhotos() {
		return adPhotos;
	}
	public void setAdPhotos(String[] adPhotos) {
		this.adPhotos = adPhotos;
	}
	public String[] getAdVideos() {
		return adVideos;
	}
	public void setAdVideos(String[] adVideos) {
		this.adVideos = adVideos;
	}
	
	
	
}
