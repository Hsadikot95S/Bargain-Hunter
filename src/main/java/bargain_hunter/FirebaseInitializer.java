package bargain_hunter;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;
import java.io.FileInputStream;

@Configuration
public class FirebaseInitializer {

    @PostConstruct
    public void initialize() {
        try {
            FileInputStream serviceAccount = new FileInputStream(
                    "/Users/huzefasadikot/Desktop/bargain_hunter/ServiceAccounts.json");

            FirebaseOptions options = new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .setDatabaseUrl(
                            "https://bargainhunter-backend-default-rtdb.firebaseio.com/") // Replace
                                                                                          // YOUR_DATABASE_URL
                                                                                          // with
                                                                                          // the
                                                                                          // actual
                                                                                          // URL
                    .build();

            if (FirebaseApp.getApps().isEmpty()) {
                FirebaseApp.initializeApp(options);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
