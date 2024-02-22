import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import SellPage from './components/SellPage';
import ListHome from './components/ListHome';
import ProductList from './components/ProductList'; // Import the ProductList component
import './styles.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <Routes>
                    <Route path="/sell" element={<SellPage />} />
                    <Route path="/list-home" element={<ListHome />} />
                    <Route path="/products" element={<ProductList />} /> {/* Define the route for ProductList */}
                    <Route path="/" element={<MainContent />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
