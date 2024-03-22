import React, { useState } from 'react'; // Removed useEffect import
import './sellPage.css';
import productService from '../services/productService';

const SellPage = () => {
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemImage, setItemImage] = useState(null);

    // Removed unused state variable currencyType
    // const [currencyType, setCurrencyType] = useState('');

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

    // Removed handleCurrencyTypeChange function as currencyType state is removed

    const handleListItem = async () => {
        const itemFull = {
            "itemTitle": itemName,
            "itemDescription": itemDescription,
            "itemPrice": itemPrice,
            "itemImageURL": itemImage,
            // Removed itemCurrency field since currencyType state is removed
        }

        const res = productService.createProduct(itemFull);
        console.log(res);
        console.log('Item listed:', { itemName, itemDescription, itemPrice, itemImage });
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

                {/* Removed currencyType select element */}

                <label>Image:</label>
                <input type="file" accept="image/*" onChange={handleImageUpload} />

                <button type="button" onClick={handleListItem}>List Item</button>
            </form>
        </div>
    );
};

export default SellPage;
