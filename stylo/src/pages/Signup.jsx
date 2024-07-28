import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import countryList from 'react-select-country-list';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',  // Fixed the typo here
        password: '',
        confirmPassword: ''  // Fixed the typo here
    });
    const navigate=useNavigate();

    const options = useMemo(() => countryList().getData(), []);
    const { name, email, phone, country, password, confirmPassword } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCountryChange = (selectedOption) => {
        setFormData({ ...formData, country: selectedOption });
    };

const signHandle=(e)=>{
    e.preventDefault();
    if(password!==confirmPassword){
        alert(`Password does not match`)
    }
    else{
        console.log(formData);
        navigate("/")
    }

}
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
                    value={country} 
                    onChange={handleCountryChange} 
                    getOptionLabel={option => option.label}
                    getOptionValue={option => option.value}
                />
                
                <label>Password:</label>
                <input type='password' name='password' value={password} onChange={onChange} />
                
                <label>Confirm Password:</label>
                <input type='password' name='confirmPassword' value={confirmPassword} onChange={onChange} />
                
                <button className='btn btn-success mt-3'>Signup</button>
            </div>
        </form>
    );
};

export default Signup;
