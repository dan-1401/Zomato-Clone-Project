import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">TastyNest</Link>
                
                {/* Navbar Toggler for Mobile */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    {/* Search Bar */}
                    <form className="d-flex mx-auto my-2 my-lg-0">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search for restaurants or dishes"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    {/* Navigation Links */}
                    <div className="d-flex flex-wrap justify-content-center mt-2 mt-lg-0">
                        <Link to="/login" className="btn btn-outline-primary me-2 mb-2 mb-lg-0">Login</Link>
                        <Link to="/signup" className="btn btn-primary me-2 mb-2 mb-lg-0">Sign Up</Link>
                        <Link to="/cart" className="btn btn-warning">Cart</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
