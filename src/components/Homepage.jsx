import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";
import Footer from "./Footer";
import { CartProvider } from "./ CartContext";



const Homepage = () => {
    return (
        <div>
            <CartProvider>
            <Navbar/>
            <Hero/>
            <Products/>
            <Footer/>
            </CartProvider>
        </div>
    );
};

export default Homepage;