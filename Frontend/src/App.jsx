import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import RestaurantDetails from './Pages/RestaurantDetails';
import CartPage from './Pages/CartPage';
import './App.css';

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if user is logged in
        const user = localStorage.getItem("username");
        setIsLoggedIn(!!user);
      }, []);
      
    return (
        <Router>
            <ToastContainer /> {/* Add this line */}
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />  {/* Redirect "/" to "/home" */}
                <Route path="/home" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/restaurant/:id" element={<RestaurantDetails />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </Router>
    );
}

export default App;