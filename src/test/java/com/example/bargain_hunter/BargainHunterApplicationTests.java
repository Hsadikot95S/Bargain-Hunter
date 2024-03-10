package com.example.bargain_hunter;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import com.google.firebase.database.DatabaseReference;

import bargain_hunter.BargainHunterApplication;
import bargain_hunter.model.User;
import bargain_hunter.service.UserService;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
@ContextConfiguration(classes = BargainHunterApplication.class)
class BargainHunterApplicationTests {

	@Mock
	private DatabaseReference mockDatabaseReference;

	@InjectMocks
	private UserService userService;

	// Test Case 1: Handling Invalid Input
	@Test
	void whenSavingNullUser_thenThrowsException() {
		// Adjust the UserService.saveUserDetails method to check for null and throw
		// IllegalArgumentException
		Exception exception = assertThrows(IllegalArgumentException.class, () -> userService.saveUserDetails(null));
		assertTrue(exception.getMessage().contains("User cannot be null"));
	}

	// Test Case 2: Simulating External Service Failure
	@Test
	void whenFirebaseServiceFails_thenHandleGracefully() {
		User user = new User("user@example.com", "password123");

		// Setup your UserService to handle Firebase errors gracefully
		CompletableFuture<Void> result = userService.saveUserDetails(user);

		// This block assumes your service method properly handles exceptions and
		// completes exceptionally
		ExecutionException executionException = assertThrows(ExecutionException.class, result::get);
		assertTrue(executionException.getCause() instanceof RuntimeException);
		assertTrue(executionException.getCause().getMessage().contains("Firebase error"));
	}

	// Test Case 3: Verifying Interaction with DatabaseReference
	@Test
	void whenUserIsSaved_verifyDatabaseInteraction() throws Exception {
		User user = new User("user@example.com", "password123");

		// Assuming the UserService.saveUserDetails properly checks for existing emails
		// and interacts with DatabaseReference
		userService.saveUserDetails(user).get();

		verify(mockDatabaseReference, times(1)).push(); // Verifies that DatabaseReference.push() was called
		verify(mockDatabaseReference, times(1)).setValueAsync(any()); // Verifies that setValueAsync was called with any
																		// value
	}
}
