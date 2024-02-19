import React, { useState } from 'react';
import './listHome.css';

const ListHome = () => {
    const [propertyType, setPropertyType] = useState('');
    const [numBedrooms, setNumBedrooms] = useState('');
    const [numBaths, setNumBaths] = useState('');
    const [squareFeet, setSquareFeet] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [location, setLocation] = useState('');
    const [address, setAddress] = useState('');

    const handlePropertyTypeChange = (e) => {
        setPropertyType(e.target.value);
    };

    const handleNumBedroomsChange = (e) => {
        setNumBedrooms(e.target.value);
    };

    const handleNumBathsChange = (e) => {
        setNumBaths(e.target.value);
    };

    const handleSquareFeetChange = (e) => {
        setSquareFeet(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setImages([...images, ...files]);
    };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { propertyType, numBedrooms, numBaths, squareFeet, description, images, location, address });
    };

    return (
        <div className="list-home">
            <h1>List Your Home</h1>
            <form onSubmit={handleSubmit} className="list-home-form">
                <label>
                    Property Type:
                    <select value={propertyType} onChange={handlePropertyTypeChange}>
                        <option value="">Select</option>
                        <option value="Single Family Home">Single Family Home</option>
                        <option value="Condo">Condo</option>
                        <option value="One Room">One Room</option>
                        <option value="Sharing Room">Sharing Room</option>
                        <option value="Apartment">Apartment</option>
                    </select>
                </label>
                <label>
                    Number of Bedrooms:
                    <input type="number" value={numBedrooms} onChange={handleNumBedroomsChange} />
                </label>
                <label>
                    Number of Baths:
                    <input type="number" value={numBaths} onChange={handleNumBathsChange} />
                </label>
                <label>
                    Square Feet:
                    <input type="number" value={squareFeet} onChange={handleSquareFeetChange} />
                </label>
                <label>
                    Description:
                    <textarea value={description} onChange={handleDescriptionChange}></textarea>
                </label>
                <label>
                    Upload Images:
                    <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
                </label>
                <label>
                    Location:
                    <input type="text" value={location} onChange={handleLocationChange} />
                </label>
                <label>
                    Address:
                    <input type="text" value={address} onChange={handleAddressChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ListHome;
