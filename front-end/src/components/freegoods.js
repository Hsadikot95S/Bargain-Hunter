import React from 'react';
import './Dashboard.css'; // Import the CSS file


function Dashboard() {
  // Define dummy products with image URLs
  const dummyProducts = [
    { id: 1, itemName:"BBCOR", itemDescription: "2023 DeMarini The Goods One Piece BBCOR 32/29",  itemImage: "https://i.ebayimg.com/images/g/jWYAAOSwlUll74Yz/s-l1600.jpg" },
    { id: 2, itemName: "Mattress", itemDescription: "Soft and comfortable Used for 1 Year", itemPrice: "$223.00",itemImage: "https://www.cnet.com/a/img/resize/d801848b4333435883ae2151864803531256e4e9/hub/2023/04/26/e144bd4a-afb6-417c-9874-2e6d3d5a71ed/screen-shot-2023-04-26-at-10-52-58-am.png?auto=webp&fit=crop&height=900&width=1200" },
    { id: 3, itemName: "Pillow", itemDescription: "New Coop Home Goods Premium Adjustable Loft Pillow Queen", itemImage: "https://hips.hearstapps.com/hmg-prod/images/ghi-best-pillows-1573668641.png?crop=0.947xw:0.729xh;0.0288xw,0.163xh&resize=1200:*" },
    { id: 4, itemName: "Heater Fan", itemDescription: "Condition: Good ", itemPrice: "$153.99",  itemImage: "https://cdn.thewirecutter.com/wp-content/media/2023/12/spaceheaters-2048px-4591.jpeg?auto=webp&quality=75&crop=1.91:1&width=1200" },
    { id: 5, itemName: "Sticker", itemDescription: "Cool Funky Stickers for your backpacks ", itemPrice: "$5.24",  itemImage: "https://i.ebayimg.com/images/g/7k8AAOSwHsRjKgyj/s-l1200.jpg" },
    { id: 6, itemName: "Sofa", itemDescription: "Condition: fair", itemPrice: " $9.99",  itemImage: "https://media.cnn.com/api/v1/images/stellar/prod/underscored-burrow-shift-sleeper-sofa-lead.jpg?c=16x9" },
    { id: 7, itemName: "Men's hat", itemDescription: "Stuntin Damn Fine Goods Hat Cap Adult Beige Snapback Corduroy Adjustable", itemPrice: "$1,499.00",itemImage: "https://i.ebayimg.com/images/g/QVIAAOSwBzxlj-Kq/s-l1600.jpg" }
  ];

  return (
    <div className='container'>
      <div className="product-list">
        {dummyProducts.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.itemImage} alt={product.itemName} />
            <h3>{product.itemName}</h3>
            <p>{product.itemDescription}</p>
            
          </div>
        ))}
      </div>
    </div>
  
  );
};


export default Dashboard;


