import React from 'react';
import './Dashboard.css'; // Import the CSS file

function Dashboard() {
  // Define dummy products with image URLs
  const dummyProducts = [
    { id: 1, itemName: "iPhone 15 Pro", itemDescription: "Brand new iPhone 15 Pro", itemPrice: "500", currencyType: "dollar", itemImage: "https://gizmobo.com/wp-content/uploads/2022/08/Apple-iPhone-14-Pro-gold.jpg" },
    { id: 2, itemName: "Book", itemDescription: "Interesting book for readers", itemPrice: "10", currencyType: "dollar", itemImage: "https://custom-writing.org/blog/wp-content/uploads/2022/08/26708-576x400.jpg" },
    { id: 3, itemName: "Study Table", itemDescription: "Study table for home or office", itemPrice: "100", currencyType: "dollar", itemImage: "https://i5.walmartimages.com/asr/d145cdc3-6c17-411b-bd32-8159bbfb6992.bf38e9fdc9313f96c54913b29814a19d.jpeg" },
    { id: 4, itemName: "Football", itemDescription: "High-quality football for sports enthusiasts", itemPrice: "20", currencyType: "dollar", itemImage: "https://res.cloudinary.com/forallpromos/image/fetch/f_auto/v1673401303/https://www.4allpromos.com/sites/default/files/imagecache/720x720/images/products/271770/137-26324-blue.jpg" },
    { id: 5, itemName: "MacBook Air", itemDescription: "Powerful MacBook Air for professionals", itemPrice: "1200", currencyType: "dollar", itemImage: "https://www.digitaltrends.com/wp-content/uploads/2022/08/macbook-air-m2-5.jpg?resize=1200,630&p=1" },
    { id: 6, itemName: "Yoga Mat", itemDescription: "Premium yoga mat for yoga enthusiasts", itemPrice: "30", currencyType: "dollar", itemImage: "https://www.janem.co.uk/wp-content/uploads/2022/06/pilates-mat.jpg" },
    { id: 7, itemName: "Night Lamp", itemDescription: "Elegant night lamp for bedrooms", itemPrice: "15", currencyType: "dollar", itemImage: "https://alexnld.com/wp-content/uploads/2019/06/ZY15100173W.jpg" }
  ];

  return (
    <div>
      <h1>Welcome to Your Dashboard!</h1>
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
}

export default Dashboard;
