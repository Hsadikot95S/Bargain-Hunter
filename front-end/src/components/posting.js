import React from 'react';
import './commonStyles.css'; // Import common CSS for styling

function PostingPolicyPage() {
  return (
    <div className="page-container">
      <h2>Posting Policy</h2>
      <div className="posting-policy-info">
        <p>At Bargain Hunter, we want to ensure a positive and respectful community experience for all users. Therefore, we have established the following posting policy:</p>
        <ul>
          <li><strong>Accuracy:</strong> Ensure that all information posted is accurate and truthful.</li>
          <li><strong>Respectful Conduct:</strong> Treat other users with respect and refrain from offensive language or behavior.</li>
          <li><strong>No Spamming:</strong> Do not post repetitive or irrelevant content, advertisements, or spam.</li>
          <li><strong>Legal Compliance:</strong> Adhere to all applicable laws and regulations when posting content.</li>
        </ul>
        <p>Failure to comply with our posting policy may result in the removal of content and/or suspension of your account.</p>
      </div>
    </div>
  );
}

export default PostingPolicyPage;