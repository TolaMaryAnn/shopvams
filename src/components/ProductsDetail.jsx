import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "./ CartContext";
import { products } from "./Products";
import { FaStar, FaArrowLeft } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((item) => item.id === parseInt(id));

  const rating = 4.5;
  const isAvailable = true;

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="bg-brand-light/30 min-h-screen py-12 border-t border-brand-light">
      <div className="container mx-auto px-6 max-w-6xl mb-24">
        <Link
          to="/"
          className="inline-flex items-center text-brand font-semibold hover:text-brand-accent transition-colors mb-10 bg-white/50 px-4 py-2 rounded-full border border-brand-light shadow-sm w-fit group"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Collections
        </Link>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 bg-white rounded-[2rem] p-6 md:p-12 shadow-xl border border-white/50">
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-sm transform hover:-translate-y-2 transition-all duration-500">
              <div className="absolute inset-0 bg-brand-dark/5 z-10 pointer-events-none" />
              <img
                className="w-full h-full object-cover"
                src={product.image}
                alt={product.name}
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-brand-accent uppercase bg-brand-light/50 w-fit rounded-full">
              {product.category || "Premium Collection"}
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-brand-dark mb-4 drop-shadow-sm leading-tight">
              {product.name}
            </h1>

            <p className="text-brand-accent text-3xl font-extrabold mb-6">
              ₦{product.price.toLocaleString()}
            </p>

            <div className="flex items-center mb-8">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={
                      index < Math.floor(rating)
                        ? "text-[#F59E0B]"
                        : "text-gray-200"
                    }
                  />
                ))}
              </div>
              <span className="ml-3 text-brand-dark/60 font-medium">({rating} Reviews)</span>
            </div>

            <div className="h-px w-full bg-brand-light mb-8" />

            <h2 className="font-bold text-lg text-brand-dark uppercase tracking-wide mb-3">
              Description
            </h2>
            <p className="text-brand-dark/70 mb-8 leading-relaxed text-lg font-light">
              Elevate your style with this masterpiece. Designed for the modern gentleman,
              it combines flawless aesthetics with unmatched durability. Every detail has
              been carefully considered to ensure you stand out. A true mark of distinction
              for your everyday wear.
            </p>

            <p
              className={`font-semibold mb-8 flex items-center ${isAvailable ? "text-emerald-500" : "text-rose-500"
                }`}
            >
              <span className={`w-2.5 h-2.5 rounded-full mr-2 ${isAvailable ? "bg-emerald-500 animate-pulse" : "bg-rose-500"}`} />
              {isAvailable ? "In Stock & Ready to Ship" : "Out of Stock"}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-auto">
              <div className="flex items-center bg-brand-light/50 rounded-full border border-brand/10 p-1">
                <button
                  onClick={decreaseQuantity}
                  className="w-12 h-12 flex items-center justify-center text-brand-dark bg-white hover:bg-brand hover:text-white rounded-full transition-all duration-300 shadow-sm"
                >
                  -
                </button>
                <span className="w-16 text-center font-bold text-xl text-brand-dark">
                  {quantity}
                </span>
                <button
                  onClick={increaseQuantity}
                  className="w-12 h-12 flex items-center justify-center text-brand-dark bg-white hover:bg-brand hover:text-white rounded-full transition-all duration-300 shadow-sm"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => addToCart(product, quantity)}
                className="flex-1 w-full bg-brand text-white hover:bg-brand-accent transition-all duration-300 py-4 px-8 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 flex items-center justify-center"
              >
                Add to Cart — ₦{(product.price * quantity).toLocaleString()}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
