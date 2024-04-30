import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import logo from './logo.png'; // Import the logo image
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import PostAd from './PostAd'; // Import the PostAd component
import { FaSearch } from 'react-icons/fa';
import '../components/Header.css'; // Import the CSS for styling
import { FaHome, FaCar, FaBook, FaShoppingCart, FaDesktop, FaFootballBall, FaMusic, FaGamepad, FaBicycle, FaUtensils, FaBed, FaBookmark } from 'react-icons/fa';

const Header = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
    const [isPostAdModalOpen, setIsPostAdModalOpen] = useState(false); // State for PostAd modal

    const openLoginModal = () => {
        setIsLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    const openRegistrationModal = () => {
        setIsRegistrationModalOpen(true);
    };

    const closeRegistrationModal = () => {
        setIsRegistrationModalOpen(false);
    };

    const openPostAdModal = () => {
        setIsPostAdModalOpen(true);
    };

    const closePostAdModal = () => {
        setIsPostAdModalOpen(false);
    };

    const SearchBar = () => {}
        const [searchTerm, setSearchTerm] = useState('');
        const [category, setCategory] = useState('all');
    
        const handleSearchTermChange = (e) => {
          setSearchTerm(e.target.value);
        };
      
        const handleCategoryChange = (e) => {
          setCategory(e.target.value);
        };
      
        const handleSearch = (e) => {
          e.preventDefault();
          console.log(`Searching for '${searchTerm}' in category '${category}'...`);
          // Implement your search logic here
        };
    
  

    return (
        <header className="header" style={{ backgroundColor: '#97adc6' }}>
            <div className="centered-content">
            <div className="left-section" >
            
        
        <input
          type="text1"
          placeholder="What are you looking for?"
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="search-input"
        />
        
          
        <button type="submit1" className="search-button">
          Search
        </button>
     

                   

                    
                </div>
                <div className="center-section">
                    <Link to="/"> 
                    <img src={logo} alt="logo" className="logo" /> 
                        {/* Add your logo component here */}
                   </Link>
                </div>
                <div className="right-section">
                    <nav className="nav">
                        <ul>
                           
                            <li><button onClick={openRegistrationModal}>Register</button></li>
                        
                            <li><button onClick={openLoginModal}>Login</button></li>
                        </ul>
                    </nav>
                </div>
                
            </div>
            <Modal isOpen={isRegistrationModalOpen} onRequestClose={closeRegistrationModal}>
                <RegistrationForm onClose={closeRegistrationModal} />
            </Modal>
            <Modal isOpen={isLoginModalOpen} onRequestClose={closeLoginModal}>
                <LoginForm onClose={closeLoginModal} />
            </Modal>
            <Modal isOpen={isPostAdModalOpen} onRequestClose={closePostAdModal}>
                <PostAd onClose={closePostAdModal} />
            </Modal>
           
        </header>
    );
};

export default Header;
