import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ id, image, title, description }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/restaurant/${id}`); // Navigate to restaurant details page
    };

    return (
        <div className="card shadow-sm" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};

export default Card;