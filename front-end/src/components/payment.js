import React, { useState } from 'react';
import './payment.css'; // Assume your CSS styles are in this file
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const PaymentForm = () => {
  const [paymentInfo, setPaymentInfo,onSelect,selected] = useState({
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    nameOnCard: '',
    saveCard: false,
    usePayPal: false,
  });

  const [formData, setFormData] = useState({
    // Your previous form data here...
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    // Continue with your previous state fields...
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit1 = (e) => {
    
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Send formData to server or process it as needed...

    // Redirect to a different route after processing
    navigate('/thank-you');
  };

  // Render the form

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the form submission, for example, sending the payment information to a backend server after proper validation.
    console.log(paymentInfo);
  };

  const { title } = useParams();

  const plans = [
    {
      title: 'Lite',
      price: '$0.00',
    },
    {
      title: 'Standard',
      price: '$88.95',
    },
    {
      title: 'Plus',
      price: '$146.95',
    },
    {
      title: 'Premium',
      price: '$395.95',
    },
  ];
  const selectedPlan = plans.find(plan => plan.title === title);

  return (
    <div className="payment-form-container">
    <form onSubmit={handleSubmit}>
      {/* Name, address, zip code, state, city fields */}
      <label htmlFor="fullName">Full Name:</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      />

      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />

      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
      />

      <label htmlFor="state">State:</label>
      <input
        type="text"
        id="state"
        name="state"
        value={formData.state}
        onChange={handleChange}
      />

      <label htmlFor="zipCode">Zip Code:</label>
      <input
        type="text"
        id="zipCode"
        name="zipCode"
        value={formData.zipCode}
        onChange={handleChange}
      />
     
   
   
      
        <h2> Payment Details</h2>
        <div className="card-details">
          <label htmlFor="cardNumber">Card number</label>
          <input
            type="text"
            name="cardNumber"
            id="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleInputChange}
            placeholder="1234 5678 9012 3456"
            required
          />

          <label htmlFor="expiryDate">Expiry date</label>
          <input
            type="text"
            name="expiryDate"
            id="expiryDate"
            value={paymentInfo.expiryDate}
            onChange={handleInputChange}
            placeholder="MM/YY"
            required
          />

          <label htmlFor="cvc">CVC/CVV</label>
          <input
            type="text"
            name="cvc"
            id="cvc"
            value={paymentInfo.cvc}
            onChange={handleInputChange}
            placeholder="3 digits"
            required
          />

          <label htmlFor="nameOnCard">Name on card</label>
          <input
            type="text"
            name="nameOnCard"
            id="nameOnCard"
            value={paymentInfo.nameOnCard}
            onChange={handleInputChange}
            required
          />

          <label>
            <input
              type="checkbox"
              name="saveCard"
              checked={paymentInfo.saveCard}
              onChange={handleInputChange}
            />
            Save for my next payment
          </label>
        </div>
        {selectedPlan && (
        <p>You have selected {selectedPlan.title} plan with the price of {selectedPlan.price}.</p>
      )}

        <button type="submit"><Link to="/" className="button-like-class" onClick={onSelect}>
      {selected ? 'Selected' : 'Pay'} 
    </Link></button>

        
      </form>

      
   
   
    </div>
  );
};

export default PaymentForm;
