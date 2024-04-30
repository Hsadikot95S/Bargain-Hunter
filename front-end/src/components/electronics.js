import React from 'react';
import './Dashboard.css'; // Import the CSS file

function Dashboard() {
  // Define dummy products with image URLs
  const dummyProducts = [
    { id: 1, itemName: "USB Charger", itemDescription: "LISEN USB C Car Charger Adapter Fast Charge 54 W PD36W Cigarette Lighter USB Charger Fast Charging Port Car Phone Charger for iPhone 15 Pro Max Plus", itemPrice: "$7.97",  itemImage: "https://m.media-amazon.com/images/I/81EFcwpPTXL._AC_SX466_.jpg" },
    { id: 2, itemName: "Smart Tv", itemDescription: "VIZIO 50-Inch V-Series 4K UHD LED Smart TV with Voice Remote, Dolby Vision, HDR10+, Alexa Compatibility, 2022 Model", itemPrice: "$223.00",itemImage: "https://m.media-amazon.com/images/I/81EkyteXxNL._AC_SX466_.jpg" },
    { id: 3, itemName: "Digital Frame", itemDescription: "16 inch Digital Picture Frame, Touch Screen Smart Digital Photo Frame with 32GB Storage, WiFi Electronic Picture Frame Easy to Share Photos and Videos via Frameo App", itemPrice: "$179.99",itemImage: "https://m.media-amazon.com/images/I/712yKSFltpL._AC_SX466_.jpg" },
    { id: 4, itemName: "Phone Mount for Car", itemDescription: "Phone Mount for Car, [ Off-Road Level Suction Cup Protection ] 3in1 Long Arm Suction Cup Holder Universal Cell Phone Holder Mount Dashboard Windshield Vent Compatible with All Smartphones", itemPrice: "$13.99",  itemImage: "https://www.apps2car.com/cdn/shop/products/apps2car-magnetic-car-mount-for-magsafe-1_1000x.jpg?v=1652078699" },
    { id: 5, itemName: "Apple iphone 11 Pro Max", itemDescription: "Apple iPhone 11 Pro Max, US Version, 256GB, Silver - Unlocked", itemPrice: "$379.24",  itemImage: "https://specials-images.forbesimg.com/imageserve/5e19e7a3da6d380006295c72//960x0.jpg?fit=scale" },
    { id: 6, itemName: "Apple Watch", itemDescription: "Soft And Breathable Sport Nylon Loop Strap Compatible with Apple Watch Bands 38MM 40MM 41MM 42MM 44MM 45MM 49MM, Women Men Adjustable Straps for IWatch Series SE", itemPrice: " $9.99",  itemImage: " https://www.macworld.com/wp-content/uploads/2023/01/apple_watch_series_3_vs_apple_watch_se_mainn.jpg?quality=50&strip=all" },
    { id: 7, itemName: "Apple Mac Book", itemDescription: "Apple 2023 MacBook Air Laptop with M2 chip: 15.3-inch Liquid Retina Display, 16GB Unified Memory, 256GB SSD Storage, 1080p FaceTime HD Camera, Touch ID. Works with iPhone/iPad", itemPrice: "$1,499.00",itemImage: "https://media.cnn.com/api/v1/images/stellar/prod/220715121407-macbook-air-m2-review-1.jpg?c=16x9" }
  ];

  return (
    <div className='container'>
      <div className="product-list">
        {dummyProducts.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.itemImage} alt={product.itemName} />
            <h3>{product.itemName}</h3>
            <p>{product.itemDescription}</p>
            <p>Price: {product.itemPrice} {product.currencyType}</p>
          </div>
        ))}
      </div>
    </div>
  
  );
};


export default Dashboard;


