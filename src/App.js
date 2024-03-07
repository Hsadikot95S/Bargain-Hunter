import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import SellPage from './components/SellPage';
import ListHome from './components/ListHome';
import ProductList from './components/ProductList';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm'; // Import the LoginForm component
import BackendCheck from './components/BackendCheck';
import './styles.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <Routes>
                    <Route path="/sell" element={<SellPage />} />
                    <Route path="/list-home" element={<ListHome />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/register" element={<RegistrationForm />} /> {/* Route for RegistrationForm */}
                    <Route path="/login" element={<LoginForm />} /> {/* Route for LoginForm */}
                    <Route path="/backend-check" element={<BackendCheck />} />
                    <Route path="/" element={<MainContent />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
