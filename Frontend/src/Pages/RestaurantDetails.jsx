import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from '../components/Card';  // If Home.jsx is inside Pages/


const RestaurantDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("token"); // Check if user is logged in

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/signup");
        }
    }, [isAuthenticated, navigate]);

    const dishes = [
        { id: 1, name: 'Pizza', price: 299 },
        { id: 2, name: 'Pasta', price: 169 },
        { id: 3, name: 'Garlic Bread', price: 129 },
    ];

    const addToCart = (dish) => {
        toast.success(`${dish.name} added to cart!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    return (
        <div
            className="restaurant-details-page d-flex align-items-center justify-content-center"
            style={{
                backgroundImage: `url('resdet.jpg')`, // Replace with your image URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
            }}  
        >
            <div className="container my-5">
                <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
                    Back
                </button>
                <h1
                    className="text-center mb-4"
                    style={{
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        padding: '10px',
                        borderRadius: '10px',
                    }}
                >
                    Restaurant Menu
                </h1>
                <div className="row">
                    {dishes.map((dish) => (
                        <div className="col-md-4 mb-4" key={dish.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{dish.name}</h5>
                                    <p className="card-text">Rs.{dish.price}</p>
                                    <button className="btn btn-primary w-100" onClick={() => addToCart(dish)}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RestaurantDetails;
