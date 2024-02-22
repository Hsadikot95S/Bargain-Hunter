import React, { useState } from 'react';
import './PostAd.css';

const PostAd = ({ onClose }) => {
    const [step, setStep] = useState(1); // Step state to track the current step of the process
    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });
    const [adDetails, setAdDetails] = useState({
        title: '',
        description: '',
        // Add other ad details like photo or video here
    });

    const handlePaymentSubmit = (event) => {
        event.preventDefault();
        // Process payment profile creation here (e.g., call an API)
        console.log('Payment profile created successfully!');
        setStep(2); // Proceed to the next step (ad details)
    };

    const handleAdSubmit = (event) => {
        event.preventDefault();
        // Process ad submission here (e.g., call an API)
        console.log('Ad submitted:', adDetails);
        onClose();
    };

    const handlePaymentInputChange = (event) => {
        const { name, value } = event.target;
        setPaymentInfo({
            ...paymentInfo,
            [name]: value,
        });
    };

    const handleAdInputChange = (event) => {
        const { name, value } = event.target;
        setAdDetails({
            ...adDetails,
            [name]: value,
        });
    };

    const handleBackButtonClick = () => {
        setStep(step - 1); // Go back one step
    };

    return (
        <div className="post-ad-container">
            {step === 1 && (
                <>
                    <h2>Step 1: Create Payment Profile</h2>
                    <form onSubmit={handlePaymentSubmit}>
                        {/* Payment information fields */}
                        <input
                            type="text"
                            placeholder="Card Number"
                            name="cardNumber"
                            value={paymentInfo.cardNumber}
                            onChange={handlePaymentInputChange}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Expiry Date"
                            name="expiryDate"
                            value={paymentInfo.expiryDate}
                            onChange={handlePaymentInputChange}
                            required
                        />
                        <input
                            type="text"
                            placeholder="CVV"
                            name="cvv"
                            value={paymentInfo.cvv}
                            onChange={handlePaymentInputChange}
                            required
                        />
                        <button type="submit">Proceed to Step 2</button>
                    </form>
                </>
            )}
            {step === 2 && (
                <>
                    <h2>Step 2: Add Ad Details</h2>
                    <form onSubmit={handleAdSubmit}>
                        {/* Ad details fields */}
                        <input
                            type="text"
                            placeholder="Title"
                            name="title"
                            value={adDetails.title}
                            onChange={handleAdInputChange}
                            required
                        />
                        <textarea
                            placeholder="Description"
                            name="description"
                            value={adDetails.description}
                            onChange={handleAdInputChange}
                            required
                        ></textarea>
                        {/* Add other ad detail fields like photo or video here */}
                        <div className="button-group">
                            <button type="button" onClick={handleBackButtonClick}>Back</button>
                            <button type="submit">Submit Ad</button>
                        </div>
                    </form>
                </>
            )}
        </div>
    );
};

export default PostAd;
