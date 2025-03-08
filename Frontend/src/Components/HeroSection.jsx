import React from 'react';

const HeroSection = () => {
    return (
        <div className="hero-section text-center py-5">
            <h1 className="display-4">Discover the Best Food in Your City</h1>
            <p className="lead">Order food from your favorite restaurants and enjoy at home.</p>
            <form className="d-flex justify-content-center">
                <input
                    className="form-control w-50 me-2"
                    type="search"
                    placeholder="Enter your delivery location"
                    aria-label="Search"
                />
                <button className="btn btn-primary" type="submit">Find Food</button>
            </form>
        </div>
    );
};

export default HeroSection;