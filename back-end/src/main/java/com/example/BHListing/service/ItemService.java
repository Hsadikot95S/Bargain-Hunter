package com.example.BHListing.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.BHListing.model.Item;
import com.example.BHListing.repository.ItemRepository;

@Service
public class ItemService {
	
	@Autowired
	private ItemRepository itemRepository;
	
	public Item saveItem(Item item) {
		return itemRepository.save(item);
	}
	
	public Item getItem(String itemId) {
		Optional<Item> optional = itemRepository.findById(itemId);
		Item item = optional.get();
		return item;
	}
	
	public Item updateItem(Item item , String itemId) {
		item.setItemId(itemId);
		return itemRepository.save(item);
	}
	
	public void deleteItem(String itemId) {
		itemRepository.deleteById(itemId);
	}
	
	public List<Item> getAllItems(){
		return itemRepository.findAll();
	}
}
