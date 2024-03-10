package bargain_hunter.service;

import bargain_hunter.model.User;
import com.google.firebase.database.*;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CompletableFuture;

@Service
public class UserService {

    private static DatabaseReference usersRef;

    public UserService() {
        FirebaseDatabase database = FirebaseDatabase.getInstance();
        UserService.usersRef = database.getReference("users");
    }

    @Async
    public static CompletableFuture<Void> saveUserDetails(User user) {
        CompletableFuture<Void> future = new CompletableFuture<>();
        usersRef.orderByChild("email").equalTo(user.getEmail())
                .addListenerForSingleValueEvent(new ValueEventListener() {
                    @Override
                    public void onDataChange(DataSnapshot dataSnapshot) {
                        if (dataSnapshot.exists()) {
                            future.completeExceptionally(new Exception("Email already exists."));
                        } else {
                            usersRef.push().setValue(user.toMap(), (databaseError, databaseReference) -> {
                                if (databaseError != null) {
                                    future.completeExceptionally(databaseError.toException());
                                } else {
                                    future.complete(null);
                                }
                            });
                        }
                    }

                    @Override
                    public void onCancelled(DatabaseError databaseError) {
                        future.completeExceptionally(databaseError.toException());
                    }
                });
        return future;
    }

    @Async
    public CompletableFuture<List<User>> getAllUsers() {
        CompletableFuture<List<User>> future = new CompletableFuture<>();
        usersRef.addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                List<User> userList = new ArrayList<>();
                for (DataSnapshot snapshot : dataSnapshot.getChildren()) {
                    User user = snapshot.getValue(User.class);
                    userList.add(user);
                }
                future.complete(userList);
            }

            @Override
            public void onCancelled(DatabaseError databaseError) {
                future.completeExceptionally(databaseError.toException());
            }
        });
        return future;
    }
}
