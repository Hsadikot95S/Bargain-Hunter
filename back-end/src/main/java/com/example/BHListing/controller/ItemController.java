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

import com.example.BHListing.model.Item;
import com.example.BHListing.service.ItemService;

@RestController
@RequestMapping("/item")
@CrossOrigin
public class ItemController {
	
	@Autowired
	private ItemService itemService;
	
	@PostMapping("/saveItem")
	public Item saveItem(@RequestBody Item item) {
		return itemService.saveItem(item);
	}
	
	@GetMapping("/getItem/{itemId}")
	public Item getItem(@PathVariable String itemId) {
		return itemService.getItem(itemId);
	}
	
	@PutMapping("/updateItem/{itemId}")
	public Item updateItem(@RequestBody Item item , @PathVariable String itemId) {
		return itemService.updateItem(item, itemId);
	}
	
	@DeleteMapping("/deleteItem/{itemId}")
	public String deleteItem(@PathVariable String itemId) {
		itemService.deleteItem(itemId);
		return "Deleted Successfully";
	}
	
	@GetMapping("/getAllItems")
	public List<Item> getAllItems(){
		return itemService.getAllItems();
	}
}
