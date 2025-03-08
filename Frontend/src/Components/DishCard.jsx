import React from 'react';

const DishCard = ({ dish, addToCart }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img
                    src={dish.image}
                    className="card-img-top"
                    alt={dish.name}
                    style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                    <h5 className="card-title">{dish.name}</h5>
                    <p className="card-text">${dish.price}</p>
                    <button
                        className="btn btn-primary w-100"
                        onClick={() => addToCart(dish)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DishCard;