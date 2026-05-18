import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";
import Footer from "./Footer";


const Homepage = () => {
    return (
        <div className="min-h-screen bg-brand-light relative">
            <Navbar />
            <Hero />
            <Products />
            <Footer />
        </div>
    );
};

export default Homepage;