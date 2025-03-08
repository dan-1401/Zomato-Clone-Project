import React from 'react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import Card from '../components/Card';
import Footer from '../Components/Footer';

const Home = () => {
    const cardsData = [
        {
            image: "Res8.jpg",
            title: "The Cheezy Fork",
            description: "Delicious food from The Cheezy Fork.",
            dishes: ["Pizza", "Pasta", "Garlic Bread"],
        },
        {
            image: "Res9.jpg",
            title: "Golden Fries Diner",
            description: "Tasty meals from Golden Fries Diner.",
            dishes: ["Burger", "Fries", "Milkshake"],
        },
        {
            image: "Res10.jpg",
            title: "Tokyo Bites",
            description: "Amazing dishes from Tokyo Bites.",
            dishes: ["Sushi", "Ramen", "Tempura"],
        },
    ];

    return (
        <div className="home-page">
            <Navbar />
            <HeroSection />
            <div className="container my-5">
                <h2 className="text-center mb-4">Top Restaurants</h2>
                <div className="row">
                    {cardsData.map((card, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                            <Card {...card} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
