package bargain_hunter.controller;

import bargain_hunter.model.User;
import bargain_hunter.service.UserService;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public CompletableFuture<ResponseEntity<List<User>>> getAllUsers() {
        return userService.getAllUsers()
                .thenApply(ResponseEntity::ok)
                .exceptionally(e -> ResponseEntity.internalServerError().body(new ArrayList<>()));
    }

    @PostMapping("/register")
    public CompletableFuture<ResponseEntity<String>> registerUser(@RequestBody User user) {
        return userService.saveUserDetails(user)
                .thenApply(aVoid -> ResponseEntity.status(201).body("User registration successful"))
                .exceptionally(e -> ResponseEntity.internalServerError().body(e.getMessage()));
    }
}
