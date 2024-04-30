import React from 'react';
import './commonStyles.css'; // Import common CSS for styling

function MemberBenefitsPage() {
  return (
    <div className="page-container">
      <h2>Member Benefits</h2>
      <div className="member-benefits-info">
        <p>As a member of Bargain Hunter, you'll enjoy exclusive benefits and rewards:</p>
        <ul>
          <li><strong>Special Discounts:</strong> Members receive exclusive discounts on a wide range of products and services.</li>
          <li><strong>Early Access:</strong> Be the first to know about new deals and promotions before they're available to the public.</li>
          <li><strong>Member-only Events:</strong> Access to special events, giveaways, and contests reserved for members.</li>
        </ul>
        <p>Don't miss out on these fantastic benefits - join Bargain Hunter today!</p>
      </div>
    </div>
  );
}

export default MemberBenefitsPage;