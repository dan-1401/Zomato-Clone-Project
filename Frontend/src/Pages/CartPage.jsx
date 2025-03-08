import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartPage = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Pizza', price: 299, quantity: 2 },
        { id: 2, name: 'Pasta', price: 169, quantity: 1 },
    ]);

    const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
        toast.error('Item removed from cart!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    const updateQuantity = (id, newQuantity) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div
            className="cart-page d-flex align-items-center justify-content-center"
            style={{
                backgroundImage: `url('Res11.jpg')`, // Replace with your image URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
            }}
        >
            <div className="container my-5">
                {/* Back Button at Top-Left */}
                <button
                    className="btn btn-secondary mb-3"
                    onClick={() => navigate(-1)}
                >
                    Back
                </button>
                {/* Your Cart Heading */}
                <h1
                    className="text-center mb-4"
                    style={{
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
                        padding: '10px',
                        borderRadius: '10px',
                    }}
                >
                    Your Cart
                </h1>
                <div className="row">
                    {cartItems.map((item) => (
                        <div className="col-md-6 mb-4" key={item.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">Rs.{item.price} x {item.quantity}</p>
                                    <p className="card-text">Total: Rs.{item.price * item.quantity}</p>
                                    <div className="d-flex justify-content-between">
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            Remove
                                        </button>
                                        <div>
                                            <button
                                                className="btn btn-secondary"
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                disabled={item.quantity <= 1}
                                            >
                                                -
                                            </button>
                                            <span className="mx-2">{item.quantity}</span>
                                            <button
                                                className="btn btn-secondary"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Total Section */}
                <div
                    className="text-center"
                    style={{
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
                        padding: '10px',
                        borderRadius: '10px',
                    }}
                >
                    <h3>Total: Rs.{total}</h3>
                    <button className="btn btn-success">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;