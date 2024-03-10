package bargain_hunter.model;

public class UserRecord {
    private String recordName;
    private String recordDescription;

    // Constructor
    public UserRecord(String recordName, String recordDescription) {
        this.recordName = recordName;
        this.recordDescription = recordDescription;
    }

    // Getters and setters
    public String getRecordName() {
        return recordName;
    }

    public void setRecordName(String recordName) {
        this.recordName = recordName;
    }

    public String getRecordDescription() {
        return recordDescription;
    }

    public void setRecordDescription(String recordDescription) {
        this.recordDescription = recordDescription;
    }
}
