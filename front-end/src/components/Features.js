import React, { useState, useEffect } from 'react';
import './Features.css';
import { Link } from 'react-router-dom';

function PromotionFeaturesSection() {
  const [features, setFeatures] = useState({
    topAd: false,
    highlightAd: false,
    urgentAd: false,
    homepageGallery: false,
    websiteURL: '',
  });

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    if (features.topAd) price += 10.99;
    if (features.highlightAd) price += 15.99;
    if (features.urgentAd) price += 25.99;
    if (features.homepageGallery) price += 35.99;
    setTotalPrice(price);
  }, [features]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFeatures((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div className="promotion-features">
      <h2>Features to Promote Your Ad</h2>
      <div className="feature-item">
        <input
          type="checkbox"
          id="topAd"
          name="topAd"
          checked={features.topAd}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="topAd">Top Ad</label>
        <span className="price">$10.99</span>
      </div>
      <div className="feature-item">
        <input
          type="checkbox"
          id="highlightAd"
          name="highlightAd"
          checked={features.highlightAd}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="highlightAd">Highlight Ad</label>
        <span className="price">$15.99</span>
      </div>
      <div className="feature-item">
        <input
          type="checkbox"
          id="urgentAd"
          name="urgentAd"
          checked={features.urgentAd}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="urgentAd">Urgent Ad</label>
        <span className="price">$25.99</span>
      </div>
      <div className="feature-item">
        <input
          type="checkbox"
          id="homepageGallery"
          name="homepageGallery"
          checked={features.homepageGallery}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="homepageGallery">Homepage Gallery</label>
        <span className="price">$35.99</span>
      </div>
      {totalPrice > 0 && (
        <button type="submit">
          <Link to="/payment" className="button-like-class">
            Checkout (${totalPrice.toFixed(2)})
          </Link>
        </button>
      )}
    </div>
  );
}

export default PromotionFeaturesSection;
