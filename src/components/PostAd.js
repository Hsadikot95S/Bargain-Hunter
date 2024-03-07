import React, { useState } from 'react';
import './PostAd.css';

const PostAd = ({ onClose }) => {
    const [step, setStep] = useState(1);
    const [selectedPlan, setSelectedPlan] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [plans, setPlans] = useState([
        {
            id: 1,
            name: 'Free Plan (Students Only)',
            price: 'Recurring payment of $19.99/month',
            features: [
                'List up to 10 items',
                'Add 5 photographs',
            ],
        },
        {
            id: 2,
            name: 'Bronze Plan',
            price: '$49.99',
            features: [
                'List unlimited items',
                'Add 30 photographs',
                'Dedicated Customer Support',
                'Advanced Analytics',
            ],
        },
        {
            id: 3,
            name: 'Silver Plan',
            price: '$74.99',
            features: [
                'List unlimited items',
                '7 days of highlight on your ADS',
                'Advanced Analytics',
                'Dedicated Customer Support',
            ],
        },
        {
            id: 4,
            name: 'Gold Plan',
            price: '$99.99',
            features: [
                'List unlimited items',
                '30 days of highlight on your ADS',
                'Dedicated Customer Support',
                'Advanced Analytics',
            ],
        },
    ]);
    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        paymentMethod: '',
    });
    const [adDetails, setAdDetails] = useState({
        title: '',
        description: '',
        plan: '',
        displayDays: '',
        photos: [],
        videos: [],
    });

    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleNextStep = () => {
        if (selectedPlan !== '') {
            setStep(2);
        } else {
            alert('Please select a plan.');
        }
    };

    const handlePaymentSubmit = (event) => {
        event.preventDefault();
        console.log('Payment profile created successfully!');
        setStep(2); // Proceed to the next step (ad details)
    };

    const handleAdSubmit = (event) => {
        event.preventDefault();
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

    const handleFileInputChange = (event) => {
        const { name, files } = event.target;
        setAdDetails({
            ...adDetails,
            [name]: files,
        });
    };

    const handleBackButtonClick = () => {
        setStep(step - 1); // Go back one step
    };

    return (
        <div className="post-ad-container">
            {step === 1 && (
                <>
                    <h2>Step 1: Choose a Plan</h2>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <div className="plans-list">
                        {plans
                            .filter((plan) =>
                                plan.name.toLowerCase().includes(searchQuery.toLowerCase())
                            )
                            .map((plan) => (
                                <div key={plan.id} className="plan-item">
                                    <input
                                        type="radio"
                                        id={plan.id}
                                        name="plan"
                                        value={plan.name}
                                        checked={selectedPlan === plan.name}
                                        onChange={() => handlePlanSelect(plan.name)}
                                    />
                                    <label htmlFor={plan.id}>
                                        {plan.name} - {plan.price}
                                        <ul>
                                            {plan.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </label>
                                </div>
                            ))}
                    </div>
                    <button className="next-btn" onClick={handleNextStep}>Next</button>
                </>
            )}
            {step === 2 && (
                <>
                    <h2>Step 2: Add Ad Details</h2>
                    <form onSubmit={handleAdSubmit}>
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
                        <label>Display Ad for:</label>
                        <select
                            name="displayDays"
                            value={adDetails.displayDays}
                            onChange={handleAdInputChange}
                            required
                        >
                            <option value="">Select Duration</option>
                            <option value="7">7 days</option>
                            <option value="15">15 days</option>
                            <option value="30">1 month</option>
                        </select>
                        <label>Payment Method:</label>
                        <select
                            name="paymentMethod"
                            value={paymentInfo.paymentMethod}
                            onChange={handlePaymentInputChange}
                            required
                        >
                            <option value="">Select Payment Method</option>
                            <option value="PayPal">PayPal</option>
                            <option value="ApplePay">Apple Pay</option>
                            <option value="Debit">Debit Card</option>
                            <option value="Credit">Credit Card</option>
                        </select>
                        {paymentInfo.paymentMethod && (
                            <div>
                                {paymentInfo.paymentMethod === 'Debit' || paymentInfo.paymentMethod === 'Credit' ? (
                                    <>
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
                                    </>
                                ) : null}
                            </div>
                        )}
                        <label>Add Photos:</label>
                        <input
                            type="file"
                            name="photos"
                            accept="image/*"
                            multiple
                            onChange={handleFileInputChange}
                        />
                        <label>Add Videos:</label>
                        <input
                            type="file"
                            name="videos"
                            accept="video/*"
                            multiple
                            onChange={handleFileInputChange}
                        />
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
