import React, { useState } from 'react';
import './sellPage.css';

const SellPage = () => {
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemImage, setItemImage] = useState(null);
    const [currencyType, setCurrencyType] = useState(''); // Declare and initialize currencyType

    const handleItemNameChange = (e) => {
        setItemName(e.target.value);
    };

    const handleItemDescriptionChange = (e) => {
        setItemDescription(e.target.value);
    };

    const handleItemPriceChange = (e) => {
        setItemPrice(e.target.value);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setItemImage(file);
    };

    const handleCurrencyTypeChange = (e) => {
        setCurrencyType(e.target.value); // Update currencyType state
    };

    const handleListItem = () => {
        // Logic to handle listing the item, e.g., sending data to the server
        console.log('Item listed:', { itemName, itemDescription, itemPrice, itemImage, currencyType });
    };

    return (
        <div className="sell-page">
            <h2>List an Item</h2>
            <form className="sell-form">
                <label>Title:</label>
                <input type="text" value={itemName} onChange={handleItemNameChange} />

                <label>Description:</label>
                <textarea value={itemDescription} onChange={handleItemDescriptionChange}></textarea>

                <label>Price:</label>
                <input type="text" value={itemPrice} onChange={handleItemPriceChange} />
                
                <select value={currencyType} onChange={handleCurrencyTypeChange}>
                    <option value="dollar">Dollar</option>
                    <option value="euro">Euro</option>
                    <option value="pound">Pound</option>
                    <option value="rupees">Indian Rupees</option>
                </select>

                <label>Image:</label>
                <input type="file" accept="image/*" onChange={handleImageUpload} />

                <button type="button" onClick={handleListItem}>List Item</button>
            </form>
        </div>
    );
};

export default SellPage;
