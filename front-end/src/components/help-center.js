import React from 'react';
import './commonStyles.css'; // Import common CSS for styling

function HelpCenterPage() {
  return (
    <div className="page-container">
      <h2>Help Center</h2>
      <div className="help-center-info">
        <h3>Frequently Asked Questions</h3>
        <ul>
          <li>
            <strong>How do I reset my password?</strong>
            <p>If you've forgotten your password, you can reset it by clicking on the "Forgot Password" link on the login page. Follow the instructions to reset your password.</p>
          </li>
          <li>
            <strong>How do I contact customer support?</strong>
            <p>You can contact our customer support team by sending an email to <a href="mailto:support@example.com">support@example.com</a> or by calling our toll-free number at <a href="tel:1-800-123-4567">1-800-123-4567</a>.</p>
          </li>
          <li>
            <strong>What payment methods do you accept?</strong>
            <p>We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. You can choose your preferred payment method during checkout.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HelpCenterPage;