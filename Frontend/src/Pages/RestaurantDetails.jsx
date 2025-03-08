import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RestaurantDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate(); 
    

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
                backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`,
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