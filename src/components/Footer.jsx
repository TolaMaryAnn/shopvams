import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import {
  FaWhatsapp,
  FaInstagram,
  FaCcVisa,
  FaCcMastercard,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white py-10 hidden md:block">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-6">
            {/* Contact Us Section */}
            <div>
              <h2 className="text-2xl font-extrabold mb-6 tracking-wide">
                CONTACT US
              </h2>
              <p className="flex items-center text-lg">
                <FiPhoneCall className="mr-3" size={24} />
                <span>09159373823</span>
              </p>
              <p className="flex items-center mt-4 text-lg">
                <CiLocationOn className="mr-3" size={28} />
                14c University Road, Abule Oja, <br />
                Akoka Yaba Lagos, Yaba. <br />
                Lagos, Nigeria. 100001
              </p>

              {/* Payment Logos */}
              <div className="flex items-center space-x-4 mt-6 text-red-500">
                <FaCcVisa size={50} />
                <FaCcMastercard size={50} />
              </div>

              {/* Social Icons */}
              <div className="flex items-center space-x-6 mt-6 text-white">
                <FaWhatsapp
                  size={36}
                  className="hover:text-green-400 transition-colors duration-200"
                />
                <FaInstagram
                  size={36}
                  className="hover:text-pink-500 transition-colors duration-200"
                />
              </div>
            </div>

            {/* Sign Up Section */}
            <div>
              <h2 className="text-2xl font-extrabold mb-6 tracking-wide">
                SIGN UP FOR DISCOUNTS & UPDATES
              </h2>
              <form className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Enter your phone number or email address"
                  className="p-3 rounded-md text-gray-900 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="bg-[#502116] hover:bg-[#7E2F1E] transition-colors duration-200 text-white py-3 rounded-md mt-4 font-bold text-lg">
                  Subscribe
                </button>
              </form>

              {/* Links */}
              <div className="flex flex-col md:flex-row md:justify-between mt-10 space-y-4 md:space-y-0">
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Return Policy
                </a>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <hr className="border-gray-600 mt-12" />

          {/* Footer Bottom */}
          <div className="mt-10 text-center">
            <p className="text-gray-400 text-sm">
              Made with <FaHeart className="inline text-green-500" /> by Tola
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Footer */}
      <footer className="md:hidden">
        <div className="container mx-auto bg-black text-white py-8 px-6">
          <div className="grid grid-cols-1 gap-8">
            {/* Sign Up Section */}
            <div>
              <h2 className="text-base font-extrabold mb-6">
                SIGN UP FOR DISCOUNTS & UPDATES
              </h2>
              <form className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Enter your phone number or email address"
                  className="p-3 rounded-md text-gray-900 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="bg-[#502116] hover:bg-[#7E2F1E] transition-colors duration-200 text-white py-3 rounded-md mt-4 font-bold text-sm">
                  Subscribe
                </button>
              </form>

              <hr className="border-gray-600 mt-6 mb-10" />

              {/* Links */}
              <div className="flex flex-col space-y-4">
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Return Policy
                </a>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </div>
            </div>

            {/* Contact Us Section */}
            <div>
              <h2 className="text-lg font-extrabold mb-6">CONTACT US</h2>
              <p className="flex items-center text-lg">
                <FiPhoneCall className="mr-3" size={24} />
                <span>09159373823</span>
              </p>
              <p className="flex items-center mt-4 text-lg">
                <CiLocationOn className="mr-3" size={28} />
                14c University Road, Abule Oja, <br />
                Akoka Yaba Lagos, Yaba. <br />
                Lagos, Nigeria. 100001
              </p>

              {/* Payment Logos */}
              <div className="flex items-center space-x-4 mt-6 text-red-500">
                <FaCcVisa size={50} />
                <FaCcMastercard size={50} />
              </div>

              {/* Social Icons */}
              <div className="flex items-center space-x-6 mt-6 text-white">
                <FaWhatsapp
                  size={36}
                  className="hover:text-green-400 transition-colors duration-200"
                />
                <FaInstagram
                  size={36}
                  className="hover:text-pink-500 transition-colors duration-200"
                />
              </div>
            </div>
          </div>

          <hr className="border-gray-600 mt-6" />

          <div className="text-center py-6">
            <p className="text-gray-400 text-sm">
              Made with <FaHeart className="inline text-green-500" /> by Tola
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
