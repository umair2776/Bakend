import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();
    const options = useMemo(() => countryList().getData(), []);
    const { name, email, phone, country, password, confirmPassword } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCountryChange = (selectedOption) => {
        setFormData({ ...formData, country: selectedOption ? selectedOption.value : "" });
    };

    const signHandle = async (e) => {
        e.preventDefault();

        // Ensure that the passwords match before making the API request
        if (password !== confirmPassword) {
            alert("Password does not match");
            return;
        }

        try {
            // Making the API request
            const response = await axios.post("http://localhost:9000/api/admin/user/register", formData);
            console.log(response);

            // On successful registration
            alert("User registration successful");
            navigate("/");  // Redirect to the homepage or another page
        } catch (error) {
            // Handle any errors that occur during the registration process
            console.error("Registration error:", error);
            alert("Registration failed. Please try again.");
        }
    };

    return (
        <form onSubmit={signHandle}>
            <div className='d-flex justify-content-center flex-column align-items-center'>
                <label>Name:</label>
                <input type='text' name='name' value={name} onChange={onChange} />
                
                <label>Email:</label>
                <input type='email' name='email' value={email} onChange={onChange} />
                
                <label>Phone:</label>
                <input type='number' name='phone' value={phone} onChange={onChange} />
                
                <label>Country:</label>
                <Select 
                    options={options} 
                    value={options.find(option => option.value === country)} 
                    onChange={handleCountryChange} 
                />
                
                <label>Password:</label>
                <input type='password' name='password' value={password} onChange={onChange} />
                
                <label>Confirm Password:</label>
                <input type='password' name='confirmPassword' value={confirmPassword} onChange={onChange} />
                
                <button className='btn btn-success mt-3' type='submit'>Register</button>
            </div>
        </form>
    );
};

export default Signup;
