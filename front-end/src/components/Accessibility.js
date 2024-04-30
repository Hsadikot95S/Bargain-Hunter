import React from 'react';
import './commonStyles.css'; // Import common CSS for styling

function AccessibilityPage() {
  return (
    <div className="page-container">
      <h2>Accessibility</h2>
      <div className="accessibility-info">
        <p>This page is dedicated to providing information about accessibility features and options available on our website.</p>
        <p>Our commitment to accessibility ensures that all users, including those with disabilities, can access and interact with our website effectively.</p>
        <h3>Accessibility Features</h3>
        <ul>
          <li><strong>Keyboard navigation:</strong> You can navigate through our website using keyboard shortcuts for improved accessibility.</li>
          <li><strong>Screen reader support:</strong> Our website is compatible with screen reader software to assist users with visual impairments.</li>
          <li><strong>High contrast mode:</strong> We offer a high contrast mode option for users who prefer enhanced visibility.</li>
        </ul>
        <h3>Feedback</h3>
        <p>We value your feedback on accessibility issues. If you encounter any accessibility barriers while using our website, please contact us at <a href="mailto:accessibility@example.com">accessibility@example.com</a>.</p>
      </div>
    </div>
  );
}

export default AccessibilityPage;