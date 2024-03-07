import React, { useState } from 'react';
import '../loginForm.css';

const LoginForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // For testing, log form data to console
        onClose();
    };

    return (
        <div className="login-form">
            <div className="form-content">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
