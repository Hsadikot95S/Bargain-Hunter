import React from 'react';
import './commonStyles.css'; // Import common CSS for styling

function JoinUsPage() {
  return (
    <div className="page-container">
      <h2>Join Us</h2>
      <div className="join-us-info">
        <p>Join our Bargain Hunter community and enjoy exclusive benefits and discounts!</p>
        <h3>Why Join Us?</h3>
        <ul>
          <li><strong>Exclusive Deals:</strong> Members get access to special discounts and offers on a wide range of products.</li>
          <li><strong>Early Access:</strong> Be the first to know about new arrivals, sales, and promotions.</li>
          <li><strong>Community Engagement:</strong> Connect with fellow bargain hunters, share tips, and participate in discussions.</li>
        </ul>
        <p>Ready to join the hunt? Sign up now and start saving!</p>
      </div>
    </div>
  );
}

export default JoinUsPage;