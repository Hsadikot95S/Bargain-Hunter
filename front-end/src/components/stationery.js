import React from 'react';
import './Dashboard.css'; // Import the CSS file

function Dashboard() {
  // Define dummy products with image URLs
  const dummyProducts = [
    { id: 1, itemName: "Nicpro 39 PCS", itemDescription: "Aesthetic School Supplies with Big Capacity Pen Case, 12 Colors Chisel Tip Cute Highlighters, 5 Quick Dry Retractable Black Ink Pens, 6 Pastel Mechanical Pencil 0.5 & 0.7 mm", itemPrice: "$27.99", itemImage: "https://www.alotmall.com/cdn/shop/products/MUJI-Style-Gel-Pen-12-Colors-Set-6.jpg?v=1551258433" },
    { id: 2, itemName: "Yansanido Spiral Notebook", itemDescription: "4 Pcs 4 Color A5 Thick Plastic Hardcover 7mm College Ruled Paper 80 Sheets (160 Pages) Journal for School and Office Supplies (4 Pcs A5)", itemPrice: "$12.99", itemImage: "https://m.media-amazon.com/images/I/713fXcP1g1L._AC_SL1500_.jpg" },
    { id: 3, itemName: "Famassi Rose Gold Desk Accessories", itemDescription: "Office Supplies Set Acrylic Stapler Set Staple Remover, Tape Holder, 2 Ballpoint Pen, Scissor, Binder/Paper Clips and 1000pcs Staples.", itemPrice: "$21.99",  itemImage: "https://m.media-amazon.com/images/I/71zagKu+lsL._AC_SL1500_.jpg" },
    { id: 4, itemName: "Vintage Stationary Paper and Envelopes Set", itemDescription: "Writing Stationery Paper Letter and Envelopes Includes Sheets Antique Letter Papers, Kraft Envelopes, Retro Accessories, Rope (60)", itemPrice: "$9.99",  itemImage: "https://m.media-amazon.com/images/I/91MnY18LHCS._AC_SL1500_.jpg" },
    { id: 5, itemName: "Arulis DIY Journal Kit", itemDescription: "Gifts for Girls Age of 8 9 10 11 12 13 Years Old and Up, Girls Journal Set for Teen Decorate Her Planner/Organizer Birthday Gift Cute Art Crafts Scrapbook Stationary Kit", itemPrice: "$17.99",  itemImage: "https://m.media-amazon.com/images/I/81B0XicY+KL._AC_SL1500_.jpg" },
    { id: 6, itemName: "Marbrasse Pen Organizer", itemDescription: "2 Drawer, Multi-Functional Pencil Holder for Desk, Desk Organizers and Accessories with 5 Compartments + Drawer for Office Art Supplies (White)", itemPrice: "$9.99",  itemImage: "https://m.media-amazon.com/images/I/81xXymyUICL._AC_SL1500_.jpg" },
    { id: 7, itemName: "WOIWO 3PCS Mini Cloud Portable Box ", itemDescription: "Cutter Cute Paper Cutter Cutting Paper Blade Office School Supplies Stationery Gift", itemPrice: "$7.98", itemImage: "https://m.media-amazon.com/images/I/51qt6BYpb0L._AC_SL1001_.jpg" },
    { id: 8, itemName: "CHROMATEK 54 Watercolor Pens Set", itemDescription: "Including 15 Page Pad & Online Video Tutorial Series, 4 Aquapens, 50 Unique Colors, Real Brush Pens, Easily Blended, Vivid, Smooth, Professional Art Supplies", itemPrice: "$47.99",  itemImage: "https://m.media-amazon.com/images/I/91kP-72zlEL._AC_SL1500_.jpg" }
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


