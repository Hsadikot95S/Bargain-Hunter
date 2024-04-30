import React from 'react';
import './Dashboard.css'; // Import the CSS file


function Dashboard() {
  // Define dummy products with image URLs
  const dummyProducts = [
    { 
        id: 1, 
        itemName: "Adjustable Dumbbells Set", 
        itemDescription: "Adjustable weights set for strength training, includes two dumbbells with adjustable weight plates.",
        itemPrice: "$149.99", 
        itemImage: "https://repfitness.com/cdn/shop/files/AdjustableDumbbells-DetailShots-60-Edit.jpg?v=1699542484"
    },
    { 
        id: 2, 
        itemName: "Yoga Mat", 
        itemDescription: "Premium quality non-slip yoga mat suitable for all types of yoga practices and workouts.",
        itemPrice: "$29.99", 
        itemImage: "https://www.gaiam.com/cdn/shop/products/ExtraLargeMat2.png?v=1672357066" 
    },
    { 
        id: 3, 
        itemName: "Stationary Exercise Bike", 
        itemDescription: "Indoor exercise bike with adjustable resistance levels and digital display for tracking workouts.",
        itemPrice: "$299.99", 
        itemImage: "https://cdn.thewirecutter.com/wp-content/media/2022/10/stationarybikes-2048px-0138.jpg?auto=webp&quality=75&width=1024" 
    },
    { 
        id: 4, 
        itemName: "Resistance Bands Set", 
        itemDescription: "Set of 5 different resistance bands for various strength training exercises and rehabilitation workouts.",
        itemPrice: "$19.99", 
        itemImage: "https://cdn.thewirecutter.com/wp-content/uploads/2017/12/resistancebands-lowres-9364.jpg?auto=webp&quality=60&width=570" 
    },
    { 
        id: 5, 
        itemName: "Treadmill", 
        itemDescription: "Electric treadmill with adjustable speed and incline settings for cardio workouts.",
        itemPrice: "$599.99", 
        itemImage: "https://cdn.thewirecutter.com/wp-content/media/2023/06/treadmill-2048px-7076.jpg" 
    },
    { 
        id: 6, 
        itemName: "Jump Rope", 
        itemDescription: "Durable and adjustable jump rope for cardio exercises and improving agility and coordination.",
        itemPrice: "$9.99", 
        itemImage: "https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1536,b_rgb:f8f8f8/catalog/Conditioning/Jump%20Ropes%20/Speed%20Ropes/YA0013-10/YA0013-10-H_yisx7k.png" 
    },
    { 
        id: 7, 
        itemName: "Pull-Up Bar", 
        itemDescription: "Doorway pull-up bar for upper body strength training exercises like pull-ups and chin-ups.",
        itemPrice: "$29.99", 
        itemImage: "https://americanbarbell.com/cdn/shop/products/2222.jpg?v=1598667827" 
    },
    { 
        id: 8, 
        itemName: "Exercise Ball", 
        itemDescription: "Anti-burst exercise ball for core strengthening exercises, balance training, and rehabilitation.",
        itemPrice: "$19.99", 
        itemImage: "https://cdn.thewirecutter.com/wp-content/media/2023/02/exerciseballs-2048px-09602-3x2-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200" 
    }
  ];

  return (
    <div className='container'>
      <div className="product-list">
        {dummyProducts.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.itemImage} alt={product.itemName} />
            <h3>{product.itemName}</h3>
            <p>{product.itemDescription}</p>
            <p>Price: {product.itemPrice} </p>
          </div>
        ))}
      </div>
    </div>
  
  );
};


export default Dashboard;


