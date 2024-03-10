package bargain_hunter.model;

import java.util.HashMap;
import java.util.Map;

public class User {
    private String userId;
    private String email;
    private String password;
    private String firstName;
    private String address;
    private String phone;
    private String lastName;

    // No-argument constructor
    public User() {
    }

    // Constructor with email and password
    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }

    // Additional constructor for more flexibility
    public User(String userId, String email, String password, String firstName, String lastName, String address,
            String phone) {
        this.userId = userId;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
    }

    // Getters and setters
    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    // Method to convert User object to a map
    public Map<String, Object> toMap() {
        Map<String, Object> map = new HashMap<>();
        map.put("userId", userId);
        map.put("email", email);
        map.put("password", password);
        map.put("firstName", firstName);
        map.put("address", address);
        map.put("phone", phone);
        map.put("lastName", lastName);
        return map;
    }
}
