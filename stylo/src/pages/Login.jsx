import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const signHandle = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8083/api/admin/user/login", formData);
            if (response.data.success) {
                const newToken = response.data.token;
                setToken(newToken);

                // Store the token in localStorage
                localStorage.setItem("token", newToken);

                alert(response.data.message);
                navigate("/dashboard");
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred during login. Please try again.");
        }
    };

    return (
        <form onSubmit={signHandle}>
            <div className='d-flex justify-content-center flex-column align-items-center'>
                <label>Email:</label>
                <input type='email' name='email' value={email} onChange={onChange} />
                <label>Password:</label>
                <input type='password' name='password' value={password} onChange={onChange} />
                <button type='submit' className='btn btn-success mt-3'>Login</button>
            </div>
        </form>
    );
};

export default Login;
