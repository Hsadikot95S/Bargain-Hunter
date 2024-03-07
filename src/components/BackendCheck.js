// BackendCheck.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BackendCheck = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Use an effect hook to perform the backend check when the component mounts
        const checkBackend = async () => {
            try {
                // Make a GET request to your backend endpoint
                const response = await axios.get('http://localhost:8081/api/check');
                setMessage(response.data); // Assuming your backend returns a message
            } catch (error) {
                setMessage('Error connecting to the backend.'); // Handle error if connection fails
            }
        };

        checkBackend(); // Call the function to perform the backend check
    }, []);

    return (
        <div>
            <h2>Backend Check</h2>
            <p>{message}</p>
        </div>
    );
};

export default BackendCheck;
