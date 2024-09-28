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
    <div className="container mx-auto px-4 py-8 mb-24">
      <Link
        to="/"
        className="flex items-center text-[#502116] hover:text-[#7E2F1E] mb-6"
      >
        <FaArrowLeft className="mr-2" />
        Back to Products
      </Link>

      <div className="flex flex-col md:flex-row gap-8 p-4 lg:p-0">
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-auto  object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-semibold text-[#502116] mb-2">
            {product.name}
          </h1>
          <p className="text-[#333333] text-xl mb-4">₦{product.price}</p>

          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={
                  index < Math.floor(rating)
                    ? "text-[#502116]"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="ml-2 text-gray-600">({rating})</span>
          </div>

          {/* Availability */}
          <p
            className={`font-semibold mb-4 ${
              isAvailable ? "text-green-600" : "text-red-600"
            }`}
          >
            {isAvailable ? "In Stock" : "Out of Stock"}
          </p>

          <h2 className="font-bold text-xl">Product description </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis
            euismod malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras
            venenatis euismod malesuada.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
            Cras venenatis euismod malesuada.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum
            vestibulum. Cras venenatis euismod malesuada.
          </p>

          <div className="text-sm lg:text-xl font-bold">Quantity</div>
          <div className="flex items-center mb-6 mt-6">
            <button
              onClick={decreaseQuantity}
              className="text-black bg-gray-200 px-4 lg:text-xl text-sm py-1 rounded-full"
            >
              -
            </button>
            <span className="px-4 py-1 bg-gray-100 text-gray-800">
              {quantity}
            </span>
            <button
              onClick={increaseQuantity}
              className="text-black bg-gray-200 px-4 lg:text-xl text-sm py-1 rounded-full"
            >
              +
            </button>
          </div>

          <button
            onClick={() => addToCart(product, quantity)}
            className="bg-[#502116] text-white text-sm lg:text-base px-24 lg:px-52 py-3 rounded-2xl shadow-lg hover:bg-[#7E2F1E] transition-colors duration-300"
          >
            Add {quantity} to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
