import React from 'react';
import './Dashboard.css'; // Import the CSS file

function Dashboard() {
  // Define dummy products with image URLs
  const dummyProducts = [
    { id: 1, itemName: "Car", itemDescription:  "2011 Mercedes-Benz ", itemPrice: "$3,200.00", itemImage: "https://i.ebayimg.com/images/g/QLgAAOSwbulklAii/s-l1600.jpg" },
    { id: 2, itemName: "Bike", itemDescription: "2017 FELT AI, 56 cm, Triathlon Bike", itemPrice: "$2,524.00",itemImage: "https://i.ebayimg.com/images/g/xB4AAOSwSbFl7LfY/s-l1600.jpg" },
    { id: 3, itemName: "Bicycle", itemDescription: "2016 Jamis Xenith Comp 58 cm Shimano 105 ST- 5800, Carbon fiber road bike", itemPrice: "$749.00",itemImage: "https://i.ebayimg.com/images/g/jVoAAOSwWZ9l-Jax/s-l960.png" },
    { id: 4, itemName: "Car", itemDescription: "1988 Ford Bronco", itemPrice: "$12,500.00", itemImage: "https://i.ebayimg.com/images/g/hGwAAOSwsh9l5oHJ/s-l1600.jpg" },
    { id: 5, itemName: "Bicycle", itemDescription: "Fuji D6 Triathlon Bike", itemPrice: "$1,750.00",  itemImage: "https://i.ebayimg.com/images/g/5hMAAOSwF1Zl92Fo/s-l1600.jpg" },
    { id: 6, itemName: "Truck", itemDescription: "2021 Ford F-150 XLT", itemPrice: "$37,990.00", itemImage: "https://i.ebayimg.com/images/g/vB0AAOSwAyBlxVbN/s-l1600.jpg" },
    { id: 7, itemName: "Pickup Truck", itemDescription: "2022 Ford F-150 Lariat", itemPrice: "$55,916.00", itemImage: "https://i.ebayimg.com/images/g/~nMAAOSwboJlxUoV/s-l1600.jpg" },
    { id: 8, itemName: "1940 Dodge Hot rod", itemDescription: "1940 Dodge Coupe. Fresh Bigblock Mopar. Automatic 727. 9” . Just got out of storage. Price is firm. No trades.", itemPrice: "$41,000.00", itemImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0dq_93Lx0ghDB7kO0YPyZusLHrBbyrWIV9NeVRxXvg&s" }
  
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


