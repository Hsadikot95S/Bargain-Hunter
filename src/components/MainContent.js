import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mainContentImage from './mainContent.jpeg'; // Import the main content image
import electronicsImage from './electronics.jpeg'; // Import the electronics image
import booksImage from './books.jpeg'; // Import the books image
import furnitureImage from './furniture.jpeg'; // Import the furniture image
import vehicleImage from './vehicle.jpeg'; // Import the vehicle image
import stationeryImage from './stationery.jpeg'; // Import the stationery image
import RegistrationForm from './RegistrationForm'; // Import your registration form component
import apartmentImage from './apartment.jpeg'; // Import the apartment image
import townhomeImage from './townhome.jpeg'; // Import the townhome image
const MainContent = () => {
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

    const handleRegistrationClose = () => {
        setIsRegistrationOpen(false);
    };

    return (
        <main className="main-content">
            {isRegistrationOpen ? (
                <div className="registration-form-wrapper">
                    <RegistrationForm onClose={handleRegistrationClose} /> {/* Display the registration form */}
                </div>
            ) : (
                <>
                    
                    <img src={mainContentImage} alt="Main Content" style={{ height: '50%', width: '100%' }} /> {/* Display the main content image */}

                    {/* Category sections */}
                    <div className="category-container">
                        <Link to="/apartments" className="category">
                            <img src={apartmentImage} alt="Apartment for Rent" style={{ width: '100%' }} />
                            <h3>Apartment for Rent</h3>
                            <p>A category for apartments available for rent. Find your perfect living space.</p>
                        </Link>
                        <Link to="/townhomes" className="category">
                            <img src={townhomeImage} alt="Townhome for Rent" style={{ width: '100%' }} />
                            <h3>Townhome for Rent</h3>
                            <p>A category for townhomes available for rent. Discover cozy townhome rentals.</p>
                        </Link>
                        <Link to="/books" className="category">
                            <img src={booksImage} alt="Books" style={{ width: '100%' }} />
                            <h3>Books</h3>
                            <p>A category for books. Explore a wide range of genres and authors.</p>
                        </Link>
                        <Link to="/furniture" className="category">
                            <img src={furnitureImage} alt="Furniture" style={{ width: '100%' }} />
                            <h3>Furniture</h3>
                            <p>A category for furniture. Furnish your home with our stylish collection.</p>
                        </Link>
                        <Link to="/vehicles" className="category">
                            <img src={vehicleImage} alt="Vehicle" style={{ width: '100%' }} />
                            <h3>Vehicle</h3>
                            <p>A category for vehicles. Browse through our selection of cars and motorcycles.</p>
                        </Link>
                        <Link to="/stationery" className="category">
                            <img src={stationeryImage} alt="Stationery" style={{ width: '100%' }} />
                            <h3>Stationery</h3>
                            <p>A category for stationery items. Get all your office and school supplies here.</p>
                        </Link>
                        <Link to="/electronics" className="category">
                            <img src={electronicsImage} alt="Electronics" style={{ width: '100%' }} />
                            <h3>Electronics</h3>
                            <p>A category for electronics. Find the latest gadgets and devices here.</p>
                        </Link>
                    </div>
                    {/* Plans Section */}
                    <h2>Plans</h2>
                    <div className="plan-info">
                        <div className="plan">
                            <h3>Free Plan</h3>
                            <p>
                                The Free Plan provides access to basic features of Bargain Hunter, including:
                            </p>
                            <ul>
                                <li>Listing items for exchange or sale within the campus community.</li>
                                <li>Browsing and searching for budget-friendly accommodations.</li>
                                <li>Participating in community engagement activities.</li>
                            </ul>
                        </div>
                        <div className="plan">
                            <h3>Subscription Plan</h3>
                            <p>
                                The Subscription Plan offers additional benefits to enhance your Bargain Hunter experience, such as:
                            </p>
                            <ul>
                                <li>Increased visibility for your listings.</li>
                                <li>Access to advanced search features.</li>
                                <li>Priority support for your inquiries.</li>
                            </ul>
                            <p>
                                Revenue generated through recurring subscription fees supports the continuous improvement and maintenance of the BargainHunter platform.
                            </p>
                        </div>
                    </div>

                    {/* Bargain Hunter Info Section */}


                </>
            )}
        </main>
    );
};

export default MainContent;
