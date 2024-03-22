import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from './RegistrationForm'; // Import your registration form component
import apartmentImage from './apartment.jpeg'; // Import the apartment image
import townhomeImage from './townhome.jpeg'; // Import the townhome image
import booksImage from './books.jpeg'; // Import the books image
import furnitureImage from './furniture.jpeg'; // Import the furniture image
import vehicleImage from './vehicle.jpeg'; // Import the vehicle image
import stationeryImage from './stationery.jpeg'; // Import the stationery image
import electronicsImage from './electronics.jpeg'; // Import the electronics image
import ad1Image from './ad1.jpeg'; // Import ad 1 image
import ad2Image from './ad2.jpeg'; // Import ad 2 image

const MainContent = () => {
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
    const [currentAdIndex, setCurrentAdIndex] = useState(0);

    // Define advertisements
    const ads = [
        {
            title: "Ad Title 1",
            imageUrl: ad1Image,
            link: "/ad1"
        },
        {
            title: "Ad Title 2",
            imageUrl: ad2Image,
            link: "/ad2"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [ads.length]);

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
                    {/* Advertisement section */}
                    <div className="advertisement-container">
                        <Link to={ads[currentAdIndex].link} className="advertisement">
                            <img src={ads[currentAdIndex].imageUrl} alt={ads[currentAdIndex].title} className="advertisement-image" />
                        </Link>
                    </div>

                    {/* Category sections */}
                    <div className="category-container">
                        <Link to="/apartments" className="category">
                            <img src={apartmentImage} alt="Apartment for Rent" className="category-image" />
                            <h3>Apartment for Rent</h3>
                            <p>A category for apartments available for rent. Find your perfect living space.</p>
                        </Link>
                        <Link to="/townhomes" className="category">
                            <img src={townhomeImage} alt="Townhome for Rent" className="category-image" />
                            <h3>Townhome for Rent</h3>
                            <p>A category for townhomes available for rent. Discover cozy townhome rentals.</p>
                        </Link>
                        <Link to="/books" className="category">
                            <img src={booksImage} alt="Books" className="category-image" />
                            <h3>Books</h3>
                            <p>A category for books. Explore a wide range of genres and authors.</p>
                        </Link>
                        <Link to="/furniture" className="category">
                            <img src={furnitureImage} alt="Furniture" className="category-image" />
                            <h3>Furniture</h3>
                            <p>A category for furniture. Furnish your home with our stylish collection.</p>
                        </Link>
                        <Link to="/vehicles" className="category">
                            <img src={vehicleImage} alt="Vehicle" className="category-image" />
                            <h3>Vehicle</h3>
                            <p>A category for vehicles. Browse through our selection of cars and motorcycles.</p>
                        </Link>
                        <Link to="/stationery" className="category">
                            <img src={stationeryImage} alt="Stationery" className="category-image" />
                            <h3>Stationery</h3>
                            <p>A category for stationery items. Get all your office and school supplies here.</p>
                        </Link>
                        <Link to="/electronics" className="category">
                            <img src={electronicsImage} alt="Electronics" className="category-image" />
                            <h3>Electronics</h3>
                            <p>A category for electronics. Find the latest gadgets and devices here.</p>
                        </Link>
                    </div>
                </>
            )}
        </main>
    );
};

export default MainContent;
