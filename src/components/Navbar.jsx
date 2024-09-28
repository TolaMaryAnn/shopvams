import React, { useState, useContext } from "react";
import logo from "../assets/shopvams.jpeg";
import { FiSearch } from "react-icons/fi";
import {
  MdClose,
  MdOutlineAddShoppingCart,
  MdOutlineManageAccounts,
} from "react-icons/md";
import { RiDeleteBin4Line } from "react-icons/ri";
import naira from "../assets/naira.png";
import { CartContext } from "../components/ CartContext";

function ShippingStep({ cartItems, totalPrice, setCurrentStep }) {
  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [shippingMethod, setShippingMethod] = useState("");
  const shippingMethods = [
    { id: "custom", label: "Customer Pick-up", price: 100 },
    { id: "express", label: "Yaba/jibowu/ bariga/shomolu", price: 1500 },
    {
      id: "standard",
      label:
        "Onipan/ fadeyi/ surulere/ ebuttemetta/ ojota/Maryland/ Anthony/ gbagada/ ogudu/ ketu ikosi/",
      price: 4800,
    },
    {
      id: "express",
      label: "Illupeju/ palmgrove/ Ikeja GRA/ iponri / Ojuelegba",
      price: 1500,
    },
    {
      id: "standard",
      label:
        "Ikotun/ ipaja/ ayobo/ abulegba/iju/ iyana ipaja/aboru/fagba/bucknor/ idimu/igando/ festac/ Egbeda/ shasha / Magodo",
      price: 2500,
    },
    {
      id: "express",
      label:
        "Ago palace/ ajao Estate/ omole phase 2/ berger/ Oshodi / ogba/ Agege/ olowora/ oshodi/ isolo",
      price: 1500,
    },
    {
      id: "standard",
      label:
        "Alakuko/ Alagbado/ ojokoro ijaiye/ ikorodu/ satellite/ Ajah/ Ibadan/ Ogun / Abeokuta / Osun / Akure / Ijebu Ode",
      price: 6500,
    },
    {
      id: "express",
      label:
        "Interstate Eg. Abuja / Enugu / Owerri / Anambra / PH / Uyo / Calabar / Benin",
      price: 1500,
    },
    { id: "standard", label: "Onikan/ vi/ ikoyi/marina / Mushin", price: 5300 },
    { id: "express", label: "Oniru/ Lekki", price: 2000 },
    {
      id: "standard",
      label: "Chevron/ VGC/ ikota/ agungi/ osapa/ Okota",
      price: 500,
    },
    {
      id: "express",
      label:
        "EAbraham adesanya/L.B.S/ badore/ ado / Ilasan/ Ogombo/ ilaje/ Orchid",
      price: 1500,
    },
    { id: "standard", label: "Sangotedo", price: 2500 },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress({ ...shippingAddress, [name]: value });
  };

  const handleShippingMethodChange = (e) => {
    setShippingMethod(e.target.value);
  };

  const shippingCost = shippingMethod
    ? shippingMethods.find((method) => method.id === shippingMethod).price
    : 0;
  const totalCost = totalPrice + shippingCost;

  return (
    <div className="p-4">
      <div className="overflow-y-auto max-h-72">
        {" "}
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-4">Shipping Address</h3>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-2 border border-gray-300 rounded mb-2"
            value={shippingAddress.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="w-full p-2 border border-gray-300 rounded mb-2"
            value={shippingAddress.address}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            className="w-full p-2 border border-gray-300 rounded mb-2"
            value={shippingAddress.city}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            className="w-full p-2 border border-gray-300 rounded mb-2"
            value={shippingAddress.postalCode}
            onChange={handleInputChange}
          />
        </div>
        <h3 className="text-2xl font-bold mb-6">Shipping Method</h3>
        <div className="grid grid-cols-1 gap-4">
          {shippingMethods.map((method) => (
            <div
              key={method.id}
              className="flex justify-between items-center p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
            >
              <label className="flex items-center w-full cursor-pointer">
                <input
                  type="radio"
                  name="shippingMethod"
                  value={method.id}
                  className="form-radio h-5 w-5 text-[#502116] mr-4 cursor-pointer"
                  onChange={handleShippingMethodChange}
                />
                <div className="flex justify-between w-full">
                  <span className="lg:text-lg text-sm font-medium">
                    {method.label}
                  </span>
                  <span className="lg:text-lg text-sm font-semibold text-[#502116]">
                    ₦{method.price}
                  </span>
                </div>
              </label>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
          <h3 className="text-3xl font-bold mb-6 text-black">Order Summary</h3>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-200 pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg shadow-md mr-4"
                />

                <div className="flex-1">
                  <p className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <p className="text-lg font-semibold text-[#502116]">
                  ₦{item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between text-lg text-gray-700">
            <span className="text-black lg:text-xl text-sm ">
              Shipping fee:
            </span>
            <span className="text-black">₦{shippingCost}</span>
          </div>

          <div className="font-bold text-xl lg:text-2xl flex justify-between mt-4 border-t border-gray-200 pt-4 text-[#502116]">
            <span>Total:</span>
            <span>₦{totalCost}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <button
          className="border border-[#502116] text-black lg:text-xl text-sm px-4 py-2 rounded"
          onClick={() => setCurrentStep(1)}
        >
          Back to Cart
        </button>
        <button
          className="bg-[#502116] text-white px-4 py-2 text-sm lg:text-xl rounded ml-4"
          onClick={() => setCurrentStep(3)}
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const {
    cartItems,
    clearCart,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
  } = useContext(CartContext);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleLoginModal = () => {
    setIsLoginOpen(!isLoginOpen);
  };
  const steps = [
    { id: 1, label: "Cart" },
    { id: 2, label: "Shipping" },
    { id: 3, label: "Payment" },
  ];

  const handlePaymentSubmit = (event) => {
    event.preventDefault();

    alert("Payment successful!");
  };

  return (
    <div className="shadow-2xl">
      {!isCartOpen && (
        <nav className="flex flex-col py-8 hidden md:block">
          <div className="flex items-center justify-between flex-wrap bg-white">
            <a
              href="#"
              className="flex items-center flex-shrink-0 text-white mr-6 h-0 w-24 cursor-pointer"
            >
              <img src={logo} alt="Logo" />
            </a>

            <div className="flex items-center space-x-10 px-16">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-96 py-2 pl-6 text-black border bg-gray-200 rounded-3xl"
                />
                <FiSearch
                  className="absolute top-1/2 transform -translate-y-1/2 text-gray-400"
                  style={{ left: "580px" }}
                />
              </div>

              <div className="flex items-center space-x-2">
                <div className="h-0 w-8 mb-4">
                  <img src={naira} alt="NGN" />
                </div>
                <select className="font-normal bg-white text-xl">
                  <option value="NGN">NGN</option>
                </select>
              </div>

              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={toggleLoginModal}
              >
                <MdOutlineManageAccounts className="text-gray-800" size={20} />
                <a href="#" className="text-gray-800">
                  Login
                </a>
              </div>

              <div className="relative cursor-pointer" onClick={toggleCart}>
                <MdOutlineAddShoppingCart className="text-gray-800" size={24} />
                {totalItems > 0 && (
                  <span className="absolute bottom-4 left-4 bg-[#502116] text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                    {totalItems}
                  </span>
                )}
              </div>
            </div>
          </div>
        </nav>
      )}

      <div className="md:hidden">
        {!isCartOpen && (
          <nav className="flex flex-col items-center py-4 bg-white">
            <div className="flex items-center justify-between flex-wrap bg-white w-full">
              {!isSearchOpen && (
                <>
                  <a
                    href="#"
                    className="flex items-center flex-shrink-0 text-white mr-20 h-0 w-20 mb-4 cursor-pointer"
                  >
                    <img src={logo} alt="Logo" />
                  </a>

                  <div className="ml-4">
                    <div className="flex items-center mb-4">
                      <div className="h-0 w-6 mb-4">
                        <img src={naira} alt="NGN" />
                      </div>
                      <select className="focus:outline-none bg-white border-none cursor-pointer">
                        <option value="naira">NGN</option>
                      </select>
                    </div>
                  </div>

                  <div className="ml-2">
                    <button
                      className="flex-shrink-0 mb-4"
                      type="button"
                      onClick={toggleSearch}
                    >
                      <FiSearch size={24} className="text-black" />
                    </button>
                  </div>

                  <div className="ml-4">
                    <div
                      className="cursor-pointer text-lg mb-4"
                      onClick={toggleLoginModal}
                    >
                      <MdOutlineManageAccounts
                        size={25}
                        className="text-[#110F3E]"
                      />
                    </div>
                  </div>

                  <div
                    className="relative ml-4 cursor-pointer mb-4"
                    onClick={toggleCart}
                  >
                    <MdOutlineAddShoppingCart
                      size={25}
                      className="text-[#110F3E]"
                    />
                    {totalItems > 0 && (
                      <span className="absolute bottom-4 left-2 bg-[#502116] text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
                        {totalItems}
                      </span>
                    )}
                  </div>
                </>
              )}

              {isSearchOpen && (
                <div className="w-full flex justify-center items-center relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="p-2 border border-gray-300 rounded-md focus:outline-none w-64"
                  />
                  <button className="absolute right-4" onClick={toggleSearch}>
                    <MdClose size={24} className="text-[#110F3E]" />
                  </button>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>

      {isLoginOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-2">
          <div
            className="bg-white rounded-lg shadow-lg p-16 bottom-24  relative"
            style={{ width: "800px" }}
          >
            <MdClose
              className="absolute top-4 right-4 cursor-pointer text-gray-600"
              size={24}
              onClick={toggleLoginModal} // Close on icon click
            />
            <h2 className="lg:text-3xl text-2xl font-bold text-center text-[#502116] mb-4">
              Login
            </h2>
            <hr className="border-t border-black mb-4" />
            <form>
              <div className="mb-4 mt-8">
                <label className="block mb-2 text-sm lg:text-xl">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border border-gray-300 p-2 rounded w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm lg:text-xl">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="border border-gray-300 p-2 rounded w-full"
                  required
                />
              </div>
              <div className="lg:flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2  md:flex">
                  <input
                    type="checkbox"
                    id="remember"
                    className="form-checkbox"
                  />
                  <label
                    htmlFor="remember"
                    className="text-xs font-normal text-black lg:text-sm"
                  >
                    Remember Me
                  </label>
                </div>
                <button
                  type="button"
                  className=" text-[#502116] underline lg:mt-0 mt-4 "
                  onClick={toggleLoginModal}
                >
                  Forgot Password?
                </button>
              </div>
              <button
                type="submit"
                className="bg-[#502116] text-white lg:text-base text-xs px-4 py-4 rounded w-full"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
      {isCartOpen && (
        <div>
          <div
            className="hidden md:flex flex-col justify-between items-center h-full fixed top-0 right-0 bottom-0 bg-white shadow-lg rounded p-4"
            style={{ width: "700px", height: "550px" }}
          >
            <div className="flex w-full justify-between">
              <div className="w-2/3 p-4">
                <div className="flex justify-between items-center border-b border-brown pb-4">
                  {steps.map((step) => (
                    <div
                      key={step.id}
                      className={`flex flex-col items-center px-4 ${
                        currentStep === step.id
                          ? "text-brown font-bold text-xl"
                          : "text-gray-500"
                      }`}
                    >
                      <div
                        className={`rounded-full w-10 h-10 flex items-center justify-center mb-2 ${
                          currentStep === step.id
                            ? "bg-brown text-black"
                            : "bg-[#502116]"
                        }`}
                      >
                        {step.id}
                      </div>
                      <span>{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-1/3 p-4 flex items-center justify-end">
                <button
                  className="flex items-center text-black"
                  onClick={clearCart}
                >
                  <RiDeleteBin4Line className="mr-2" size={24} />
                  Clear Cart
                </button>
                <MdClose
                  size={24}
                  className="cursor-pointer top-4 right-4"
                  onClick={toggleCart}
                />
              </div>
            </div>

            {currentStep === 1 ? (
              <>
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center mt-8 mb-8">
                    <MdOutlineAddShoppingCart
                      size={80}
                      className="text-black mb-4"
                    />
                    <p className="text-3xl font-semibold mb-4">
                      Your cart is empty
                    </p>
                    <p className="text-black text-xl font-normal mb-8">
                      Looks like you haven’t added anything to your cart yet.
                    </p>
                    <button
                      className="bg-[#502116] text-white px-40 text-base py-4 rounded"
                      onClick={toggleCart}
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="w-full mb-24 p-4">
                    <div
                      className="overflow-y-auto"
                      style={{ maxHeight: "300px" }}
                    >
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between mb-4"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-24"
                          />
                          <div className="flex-1 px-4 ">
                            <p className="text-sm">{item.name}</p>
                            <p className="text-xl">₦{item.price}</p>
                          </div>
                          <div className="flex items-center">
                            <button
                              onClick={() => removeFromCart(item)}
                              className="text-white bg-[#502116] px-4 lg:text-3xl text-sm py-1 rounded-full"
                            >
                              -
                            </button>
                            <span className="px-4 py-1 border-t border-b">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => addToCart(item)}
                              className="text-white bg-[#502116] px-4 lg:text-3xl text-sm py-1 rounded-full"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <p className="text-2xl font-normal">
                        Cart total:
                        <span className="text-4xl font-extrabold">
                          {" "}
                          ₦{totalPrice}
                        </span>
                      </p>
                      <p className="mt-4 text-sm text-gray-500 ">
                        Shipping fee will be added when checking out.
                      </p>
                    </div>
                    <div className="flex justify-between mt-8">
                      <button
                        className="border border-[#502116] text-black px-16 py-2 rounded"
                        onClick={toggleCart}
                      >
                        Continue Shopping
                      </button>
                      <button
                        className="bg-[#502116] text-white px-16 py-2 rounded ml-4"
                        onClick={() => setCurrentStep(2)}
                      >
                        Proceed to Shipping
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : currentStep === 2 ? (
              <ShippingStep
                cartItems={cartItems}
                totalPrice={totalPrice}
                setCurrentStep={setCurrentStep}
              />
            ) : (
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
                <form onSubmit={handlePaymentSubmit}>
                  <div className="mb-4">
                    <label className="block mb-2">Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="border border-gray-300 p-2 rounded w-full"
                      required
                    />
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="w-1/2 mr-2">
                      <label className="block mb-2">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="border border-gray-300 p-2 rounded w-full"
                        required
                      />
                    </div>
                    <div className="w-1/2 ml-2">
                      <label className="block mb-2">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="border border-gray-300 p-2 rounded w-full"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2">Name on Card</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="border border-gray-300 p-2 rounded w-full"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#502116] text-white px-4 py-2 rounded"
                  >
                    Confirm Payment
                  </button>
                </form>
              </div>
            )}
          </div>

          <div className="md:hidden flex flex-col space-y-10 top-0 right-0 bottom-0 bg-white shadow-lg rounded p-4 w-96 h-auto">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img src={logo} alt="Logo" className="w-16 h-16 mr-2" />
                <span className="font-semibold text-lg">SHOPVAMS</span>
              </div>
              <button
                className="flex items-center text-black"
                onClick={clearCart}
              >
                <RiDeleteBin4Line className="mr-2" size={24} />
                Clear Cart
              </button>
              <MdClose
                size={24}
                className="cursor-pointer"
                onClick={toggleCart}
              />
            </div>

            <div className="w-full p-4 bottom-96">
              <div className="flex justify-between items-center border-b border-brown pb-4">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className={`flex flex-col items-center px-4 ${
                      currentStep === step.id
                        ? "text-brown font-bold text-xl"
                        : "text-gray-500"
                    }`}
                  >
                    <div
                      className={`rounded-full w-10 h-10 flex items-center justify-center mb-2 ${
                        currentStep === step.id
                          ? "bg-brown text-black"
                          : "bg-[#502116]"
                      }`}
                    >
                      {step.id}
                    </div>
                    <span>{step.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {currentStep === 1 ? (
              <>
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center mt-8 mb-8">
                    <MdOutlineAddShoppingCart
                      size={80}
                      className="text-black mb-4"
                    />
                    <p className="text-xl font-semibold mb-4">
                      Your cart is empty
                    </p>
                    <p className="text-black text-sm mb-8">
                      Looks like you haven’t added anything to your cart yet.
                    </p>
                    <button
                      className="bg-[#502116] text-white px-20 text-sm py-2 rounded"
                      onClick={toggleCart}
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="w-full p-4">
                    <div
                      className="overflow-y-auto"
                      style={{ maxHeight: "300px" }}
                    >
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between mb-4"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20"
                          />
                          <div className="flex-1 px-4">
                            <p className="text-xs">{item.name}</p>
                            <p className="text-xl">₦{item.price}</p>
                          </div>
                          <div className="flex items-center">
                            <button
                              onClick={() => removeFromCart(item)}
                              className="text-white bg-[#502116] px-4 lg:text-3xl text-sm py-1 rounded-full"
                            >
                              -
                            </button>
                            <span className="px-4 py-1 border-t border-b">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => addToCart(item)}
                              className="text-white bg-[#502116] px-4 lg:text-3xl text-sm py-1 rounded-full"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <p className="text-sm font-normal">
                        Cart total:{" "}
                        <span className="text-2xl font-extrabold">
                          ₦{totalPrice}
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-between mt-8">
                      <button
                        className="border text-sm border-[#502116] text-black px-4 py-2 rounded"
                        onClick={toggleCart}
                      >
                        Continue Shopping
                      </button>
                      <button
                        className="bg-[#502116] text-white text-sm px-4 py-2 rounded ml-4"
                        onClick={() => setCurrentStep(2)}
                      >
                        Proceed to Shipping
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : currentStep === 2 ? (
              <ShippingStep
                cartItems={cartItems}
                totalPrice={totalPrice}
                setCurrentStep={setCurrentStep}
              />
            ) : (
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
                <form onSubmit={handlePaymentSubmit}>
                  <div className="mb-4">
                    <label className="block mb-2">Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="border border-gray-300 p-2 rounded w-full"
                      required
                    />
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="w-1/2 mr-2">
                      <label className="block mb-2">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="border border-gray-300 p-2 rounded w-full"
                        required
                      />
                    </div>
                    <div className="w-1/2 ml-2">
                      <label className="block mb-2">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="border border-gray-300 p-2 rounded w-full"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2">Name on Card</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="border border-gray-300 p-2 rounded w-full"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#502116] text-white px-4 py-2 rounded"
                  >
                    Confirm Payment
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
