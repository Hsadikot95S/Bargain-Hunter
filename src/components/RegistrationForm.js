import React, { useState } from 'react';
import './registrationForm.css'; // Import CSS file for styling

function RegistrationForm() {
  const [isSignInMode, setIsSignInMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isProfessional, setIsProfessional] = useState(false);
  const [professionalType, setProfessionalType] = useState('');
  const [university, setUniversity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.*[a-zA-Z]).{8,}$/;
    setPasswordMessage(
      regex.test(password)
        ? 'Password is valid'
        : 'Password must be at least 8 characters. ' +
            'It should contain a mix of letters and numbers, ' +
            'at least one special character, ' +
            'and at least one lowercase and one uppercase letter.'
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="registration-form">
      <h1>Welcome to Bargain Hunter</h1>
      <div className="mode-toggle">
        <button onClick={() => setIsSignInMode(true)}>Sign In</button>
        <button onClick={() => setIsSignInMode(false)}>Register</button>
      </div>
      <div>
        {isSignInMode ? (
          <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <p style={{ color: 'red', fontSize: '14px' }}>{passwordMessage}</p>
              <button type="submit">Sign In</button>
              <a href="/forgot-password">Forgot Password?</a>
            </form>
          </div>
        ) : (
          <div>
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <p style={{ color: 'red', fontSize: '14px' }}>{passwordMessage}</p>
              <label>
                <input
                  type="checkbox"
                  checked={isProfessional}
                  onChange={(e) => setIsProfessional(e.target.checked)}
                />
                I am a landlord or industry professional
              </label>
              <input
                type="text"
                placeholder="University (Optional)"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
              />
              {isProfessional && (
                <>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Zip Code"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                  <div>
                    <select
                      value={professionalType}
                      onChange={(e) => setProfessionalType(e.target.value)}
                    >
                      <option value="">Select Professional Type</option>
                      <option value="propertyOwner">Property Owner</option>
                      <option value="apartmentOwner">Apartment Owner</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                </>
              )}
              <button type="submit">Register</button>
            </form>
          </div>
        )}
      </div>
      <div className="social-login">
        {/* Add social media sign-in buttons */}
        <button>Sign In with Google</button>
        <button>Sign In with Facebook</button>
        <button>Sign In with Apple</button>
      </div>
    </div>
  );
}

export default RegistrationForm;
