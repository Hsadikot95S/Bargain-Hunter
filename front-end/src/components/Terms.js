import React from 'react';
import './commonStyles.css'; // Import common CSS for styling

function TermsOfUsePage() {
  return (
    <div className="page-container">
      <h2>Terms of Use</h2>
      <div className="terms-info">
        <p>Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use.</p>
        <h3>Legal Points</h3>
        <ul>
          <li><strong>Acceptance of Terms:</strong> By accessing or using this website, you agree to be bound by these terms of use and all applicable laws and regulations.</li>
          <li><strong>Intellectual Property:</strong> All content and materials available on this website are protected by intellectual property laws, including copyright, trademark, and other proprietary rights.</li>
          <li><strong>Limitation of Liability:</strong> We shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use this website.</li>
        </ul>
      </div>
    </div>
  );
}

export default TermsOfUsePage;