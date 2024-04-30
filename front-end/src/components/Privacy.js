import React from 'react';
import './commonStyles.css'; // Import common CSS for styling

function PrivacyPolicyPage() {
  return (
    <div className="page-container">
      <h2>Privacy Policy</h2>
      <div className="privacy-info">
        <p>We are committed to protecting your privacy. This privacy policy outlines how we collect, use, disclose, and safeguard your personal information.</p>
        <h3>Key Points</h3>
        <ul>
          <li><strong>Information Collection:</strong> We may collect personal information such as name, email address, and contact details when you interact with our website or services.</li>
          <li><strong>Use of Information:</strong> We may use the collected information to provide and improve our services, communicate with you, and personalize your experience.</li>
          <li><strong>Third-Party Disclosure:</strong> We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.</li>
        </ul>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;