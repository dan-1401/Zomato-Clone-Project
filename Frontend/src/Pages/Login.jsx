import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import api from '../api';

const Login = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent form reload
    
        console.log("Attempting login with:", email, password); // Debugging line
    
        try {
            const response = await axios.post("https://tastynest.onrender.com", { email, password });
    
            console.log("Login response:", response.data); // Debugging line
    
            localStorage.setItem("token", response.data.token);
            alert("Login successful!");
            navigate("/home");
        } catch (error) {
            console.error("Login error:", error.response?.data || error.message);
            alert(error.response?.data?.message || "Invalid Credentials");
        }
    };
    

    return (
        <div
            className="login-page d-flex align-items-center justify-content-center"
            style={{
                backgroundImage: `url('Res3.jpg')`, // Replace with your image URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
            }}
        >
            <div
                className="card p-4"
                style={{
                    width: '400px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '15px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
            >
                {/* Back Button at Top-Left */}
                <button
                    className="btn btn-secondary mb-3"
                    onClick={() => navigate(-1)}
                    style={{ alignSelf: 'flex-start' }}
                >
                    Back
                </button>
                <h1 className="text-center mb-4" style={{ color: '#333', fontWeight: 'bold' }}>
                    Login to TastyNest
                </h1>
                <form onSubmit={handleLogin}>
                    <div className="form-group mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{
                                borderRadius: '10px',
                                border: '1px solid #ddd',
                                padding: '10px',
                                transition: 'border-color 0.3s',
                            }}
                            onFocus={(e) => (e.target.style.borderColor = '#007bff')}
                            onBlur={(e) => (e.target.style.borderColor = '#ddd')}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                borderRadius: '10px',
                                border: '1px solid #ddd',
                                padding: '10px',
                                transition: 'border-color 0.3s',
                            }}
                            onFocus={(e) => (e.target.style.borderColor = '#007bff')}
                            onBlur={(e) => (e.target.style.borderColor = '#ddd')}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                        style={{
                            borderRadius: '10px',
                            padding: '10px',
                            fontWeight: 'bold',
                            transition: 'background-color 0.3s',
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
