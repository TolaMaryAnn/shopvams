import React, { useState, useEffect, useContext } from "react";
import { FaChevronDown } from "react-icons/fa";
import { CartContext } from "../components/ CartContext"; 
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import wth1 from "../assets/wth1.jpg";
import wth2 from "../assets/wth2.jpg";
import wth3 from "../assets/wth3.jpg";
import wth4 from "../assets/wth4.jpg";
import wth5 from "../assets/wth5.jpg";
import wth6 from "../assets/wth6.jpg";
import wth7 from "../assets/wth7.jpg";
import wth8 from "../assets/wth8.jpg";
import wth29 from "../assets/wth29.jpg";
import wth10 from "../assets/wth10.jpg";
import wth11 from "../assets/wth11.jpg";
import wth12 from "../assets/wth12.jpg";
import wth13 from "../assets/wth13.jpg";
import wth14 from "../assets/wth14.jpg";
import wth15 from "../assets/wth15.jpg";
import wth16 from "../assets/wth16.jpg";
import wth17 from "../assets/wth17.jpg";
import wth18 from "../assets/wth18.jpg";
import wth19 from "../assets/wth19.jpg";
import wth20 from "../assets/wth20.jpg";
import wth21 from "../assets/wth21.jpg";
import wth23 from "../assets/wth23.jpg";
import wth24 from "../assets/wth24.jpg";
import wl1 from "../assets/wl1.jpg";
import wl2 from "../assets/wl2.jpg";
import wl3 from "../assets/wl3.jpg";
import wl4 from "../assets/wl4.jpg";
import wl5 from "../assets/wl5.jpg";
import wl6 from "../assets/wl6.jpg";
import wl7 from "../assets/wl7.jpg";
import wl8 from "../assets/wl8.jpg";
//  import wl9 from "../assets/wl9.jpg";
import wl10 from "../assets/wl10.jpg";
import brc1 from "../assets/brc1.jpg";
import brc2 from "../assets/brc2.jpg";
import brc3 from "../assets/brc3.jpg";
import brc4 from "../assets/brc4.jpg";
import brc5 from "../assets/brc5.jpg";
import brc6 from "../assets/brc6.jpg";
import brc7 from "../assets/brc7.jpg";
import brc8 from "../assets/brc8.jpg";
import brc9 from "../assets/brc9.jpg";
import brc10 from "../assets/brc10.jpg";
import { Link } from 'react-router-dom';

export const products = [
  {
    id: 1,
    name: "Ishatar Roses Vanille",
    price: 100,
    image: wth29,
    category: "WRISTWATCH",
  },
  {
    id: 2,
    name: "Ishatar Roses Vanille",
    price: 200,
    image: brc4,
    category: "BRACELETS",
  },
  {
    id: 3,
    name: "Ishatar Roses Vanille",
    price: 100,
    image: wth16,
    category: "WRISTWATCH",
  },
  {
    id: 4,
    name: "Ishatar Roses Vanille",
    price: 200,
    image: wl8,
    category: "WALLETS",
  },
  {
    id: 5,
    name: "Ishatar Roses Vanille",
    price: 100,
    image: wth1,
    category: "WRISTWATCH",
  },
  {
    id: 6,
    name: "Ishatar Roses Vanille",
    price: 200,
    image: wth3,
    category: "WRISTWATCH",
  },
  {
    id: 7,
    name: "Ishatar Roses Vanille",
    price: 100,
    image: wth19,
    category: "WRISTWATCH",
  },
  {
    id: 8,
    name: "Ishatar Roses Vanille",
    price: 200,
    image: wth5,
    category: "WRISTWATCH",
  },
  {
    id: 9,
    name: "Ishatar Roses Vanille",
    price: 100,
    image: wl7,
    category: "WALLETS",
  },
  {
    id: 10,
    name: "Ishatar Roses Vanille",
    price: 200,
    image: wl5,
    category: "WALLETS",
  },
  {
    id: 11,
    name: "Ishatar Roses Vanille",
    price: 100,
    image: brc3,
    category: "BRACELETS",
  },
  {
    id: 12,
    name: "Ishatar Roses Vanille",
    price: 200,
    image: wth15,
    category: "WRISTWATCH",
  },
  {
    id: 13,
    name: "Ishatar Roses Vanille",
    price: 100,
    image: brc7,
    category: "BRACELETS",
  },
  {
    id: 14,
    name: "Ishatar Roses Vanille",
    price: 200,
    image: brc2,
    category: "BRACELETS",
  },
  {
    id: 15,
    name: "Ishatar Roses Vanille",
    price: 100,
    image: wl8,
    category: "WALLETS",
  },
  {
    id: 16,
    name: "Ishatar Roses Vanille",
    price: 200,
    image: brc3,
    category: "BRACELETS",
  },
  {
    id: 17,
    name: "Ishatar Roses Vanille",
    price: 100,
    image: wth17,
    category: "WRISTWATCH",
  },
  {
    id: 18,
    name: "Ishatar Roses Vanille",
    price: 200,
    image: wth23,
    category: "WRISTWATCH",
  },
  {
    id: 19,
    name: "Ishatar Roses Vanille",
    price: 100,
    image: wth18,
    category: "WRISTWATCH",
  },
  {
    id: 20,
    name: "Ishatar Roses Vanille",
    price: 200,
    image: wth21,
    category: "WRISTWATCH",
  },
  {
    id: 21,
    name: "Ishatar Roses Vanille",
    price: 100,
    image: brc1,
    category: "BRACELETS",
  },
  {
    id: 22,
    name: "Ishatar Roses Vanille",
    price: 200,
    image: wth24,
    category: "WRISTWATCH",
  },
  {
    id: 23,
    name: "Ishatar Roses Vanille",
    price: 100,
    image: brc10,
    category: "BRACELETS",
  },
  {
    id: 24,
    name: "Ishatar Roses Vanille",
    price: 200,
    image: brc6,
    category: "BRACELETS",
  },
  {
    id: 25,
    name: "Ishatar Roses Vanille",
    price: 100,
    image: wl6,
    category: "WALLETS",
  },
  {
    id: 26,
    name: "Ishatar Roses Vanille",
    price: 200,
    image: brc7,
    category: "BRACELETS",
  },
  {
    id: 27,
    name: "Ishatar Roses Vanille",
    price: 100,
    image: wl3,
    category: "WALLETS",
  },
  {
    id: 28,
    name: "Ishatar Roses Vanille",
    price: 200,
    image: wth12,
    category: "WRISTWATCH",
  },
  {
    id: 29,
    name: "Ishatar Roses Vanille",
    price: 100,
    image: brc5,
    category: "BRACELETS",
  },
  {
    id: 30,
    name: "Ishatar Roses Vanille",
    price: 200,
    image: wl1,
    category: "WALLETS",
  },
  {
    id: 31,
    name: "Ishatar Roses Vanille",
    price: 100,
    image: wl2,
    category: "WALLETS",
  },
  {
    id: 32,
    name: "Ishatar Roses Vanille",
    price: 200,
    image: wth14,
    category: "WRISTWATCH",
  },
  {
    id: 33,
    name: "Ishatar Roses Vanille",
    price: 100,
    image: wl10,
    category: "WALLETS",
  },
  {
    id: 34,
    name: "Ishatar Roses Vanille",
    price: 200,
    image: wl4,
    category: "WALLETS",
  },
  {
    id: 35,
    name: "Ishatar Roses Vanille",
    price: 100,
    image: brc8,
    category: "BRACELETS",
  },
  {
    id: 36,
    name: "Ishatar Roses Vanille",
    price: 200,
    image: brc9,
    category: "BRACELETS",
  },
  {
    id: 37,
    name: "Ishatar Roses Vanille",
    price: 100,
    image: one,
    category: "BELTS",
  },
  {
    id: 38,
    name: "Ishatar Roses Vanille",
    price: 200,
    image: two,
    category: "CUFFLINKS",
  },
  {
    id: 39,
    name: "Ishatar Roses Vanille",
    price: 100,
    image: three,
    category: "CUFFLINKS",
  },
];

 

// const ProductCard = ({ product }) => {
//   const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
//   const itemInCart = cartItems.find(item => item.id === product.id);

//   return (
//     <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white transform transition-transform hover:scale-105">
//       <img
//         className="w-full h-20 sm:h-20 md:grid-h-40 lg:h-60 object-cover"
//         src={product.image}
//         alt={product.name}
//       />
//       <div className="px-6 py-4">
//         <div className="font-light text-sm sm:text-sm md:text-xl lg:text-xl mb-2">
//           {product.name}
//         </div>
//         <p className="text-gray-700 font-bold">₦{product.price}</p>
//         {itemInCart ? (
//           <div className="flex items-center mt-4 lg:mt-16 lg:px-20">
//             <button
//               onClick={() => removeFromCart(product)}
//               className="text-white bg-[#502116] px-4 lg:text-xl text-sm py-1 rounded-full"
//             >
//               -
//             </button>
//             <span className="px-4 py-1 border-t border-b">
//               {itemInCart.quantity}
//             </span>
//             <button
//               onClick={() => addToCart(product)}
//               className="text-white bg-[#502116] px-4 lg:text-xl text-sm py-1 rounded-full"
//             >
//               +
//             </button>
//           </div>
//         ) : (
//           <button
//             onClick={() => addToCart(product)}
//             className="text-[#7E2F1E] hover:bg-[#502116] hover:text-white text-xs lg:text-base py-2 px-2 lg:px-20 lg:py-2 rounded-xl lg:rounded-2xl border border-[#7E2F1E] mt-4 lg:mt-16"
//           >
//             Add to Cart
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

const ProductCard = ({ product }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const itemInCart = cartItems.find((item) => item.id === product.id);

  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white transform transition-transform hover:scale-105">
      <Link to={`/product/${product.id}`}>
        <img
          className="w-full h-20 sm:h-20 md:grid-h-40 lg:h-60 object-cover"
          src={product.image}
          alt={product.name}
        />
      </Link>
      <div className="px-6 py-4">
        <Link to={`/product/${product.id}`}>
          <div className="font-light text-sm sm:text-sm md:text-xl lg:text-xl mb-2">
            {product.name}
          </div>
        </Link>
        <p className="text-gray-700 font-bold">₦{product.price}</p>
        {itemInCart ? (
          <div className="flex items-center mt-4 lg:mt-16 lg:px-20">
            <button
              onClick={() => removeFromCart(product)}
              className="text-white bg-[#502116] px-4 lg:text-xl text-sm py-1 rounded-full"
            >
              -
            </button>
            <span className="px-4 py-1 border-t border-b">
              {itemInCart.quantity}
            </span>
            <button
              onClick={() => addToCart(product)}
              className="text-white bg-[#502116] px-4 lg:text-xl text-sm py-1 rounded-full"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="text-[#7E2F1E] hover:bg-[#502116] hover:text-white text-xs lg:text-base py-2 px-2 lg:px-20 lg:py-2 rounded-xl lg:rounded-2xl border border-[#7E2F1E] mt-4 lg:mt-16"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

function Products({ imageSrc, title, price }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryClick = (category) => {
    const filtered =
      category === "All"
        ? products
        : products.filter((product) => product.category === category);

    setFilteredProducts(filtered);
    setSelectedCategory(category);
  };

  const categories = [
    "All",
    "WRISTWATCH",
    "CUFFLINKS",
    "BRACELETS",
    "WALLETS",
    "BELTS",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log("Filtered Products:", filteredProducts);
  }, [filteredProducts]);

  const [visibleProducts, setVisibleProducts] = useState(12);
  const loadMore = () => setVisibleProducts((prevCount) => prevCount + 20);

  return (
    <div>
      <div className="hidden md:block">
        <div className="mt-14">
          <div className="flex flex-col px-32">
            <ul className="divide-y divide-gray-300 grid grid-cols-6 gap-4 bg-gray-100 rounded-xl px-4 py-4">
              {categories.map((category, index) => (
                <li key={index} className="py-2">
                  <a
                    href="#"
                    className={`block text-center ${
                      selectedCategory === category
                        ? "border-b-4 border-gray-800"
                        : ""
                    }`}
                    onClick={() => handleCategoryClick(category)}
                    style={{ cursor: "pointer" }}
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.slice(0, visibleProducts).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {visibleProducts < filteredProducts.length && (
            <div className="flex justify-center mt-16">
              <button
                onClick={loadMore}
                className="bg-gray-200 hover:bg-[#502116] hover:text-white rounded-2xl text-black font-normal py-4 px-48 rounded"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="md:hidden">
        

        <div className="mt-6 px-4">
          
          <button
            className="flex items-center justify-between w-full text-white bg-gray-200 py-2 px-4 rounded-md"
            onClick={toggleDropdown}
          >
            <span className="text-black font-bold">Browse Collections</span>
            <FaChevronDown
              className={`transition-transform duration-300 text-black ${
                isOpen ? "transform rotate-180" : ""
              }`}
            />
          </button>

         
          {isOpen && (
            <div className="flex flex-col mt-4">
              <ul className="divide-y divide-gray-300 rounded-xl text-xs px-4 py-2 bg-gray-100">
                {categories.map((category, index) => (
                  <li key={index} className="py-2">
                    <a
                      href="#"
                      className={`block text-center ${
                        selectedCategory === category
                          ? "border-b-4 border-gray-800"
                          : ""
                      }`}
                      onClick={() => handleCategoryClick(category)}
                      style={{ cursor: "pointer" }}
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="container mx-auto px-4 py-4 mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.slice(0, visibleProducts).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {visibleProducts < filteredProducts.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={loadMore}
                className="bg-gray-200 hover:bg-[#502116] hover:text-white rounded-xl text-black text-sm py-4 px-10 rounded"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
