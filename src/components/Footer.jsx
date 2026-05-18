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
    <footer className="w-full bg-brand-dark text-brand-light">
      {/* Desktop Footer */}
      <div className="hidden md:block py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-6 tracking-wider text-brand-accent uppercase">
                  Contact Us
                </h2>
                <div className="space-y-4 text-brand-light/90">
                  <p className="flex items-center text-lg hover:text-brand-accent transition-colors cursor-pointer w-fit">
                    <FiPhoneCall className="mr-4 text-brand-accent" size={24} />
                    <span>09159373823</span>
                  </p>
                  <div className="flex items-start text-lg pt-2">
                    <CiLocationOn className="mr-4 mt-1 text-brand-accent flex-shrink-0" size={28} />
                    <p className="leading-relaxed">
                      14c University Road, Abule Oja,<br />
                      Akoka Yaba Lagos, Yaba.<br />
                      Lagos, Nigeria. 100001
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between max-w-md">
                <div className="flex items-center space-x-4 text-white/50">
                  <FaCcVisa size={44} className="hover:text-white transition-colors" />
                  <FaCcMastercard size={44} className="hover:text-white transition-colors" />
                </div>
                <div className="flex items-center space-x-6 text-brand-light/80">
                  <FaWhatsapp
                    size={32}
                    className="hover:text-[#25D366] transition-colors duration-300 cursor-pointer"
                  />
                  <FaInstagram
                    size={32}
                    className="hover:text-[#E1306C] transition-colors duration-300 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-6 tracking-wider text-brand-accent uppercase">
                Sign Up for Updates
              </h2>
              <form className="flex flex-col space-y-4 max-w-md">
                <input
                  type="text"
                  placeholder="Email address or phone number"
                  className="p-4 rounded-lg text-brand-dark bg-white/90 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all placeholder-brand-dark/50"
                />
                <button className="bg-brand hover:bg-brand-accent transition-colors duration-300 text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Subscribe
                </button>
              </form>

              <div className="flex flex-row space-x-8 mt-12 text-sm font-medium">
                <a
                  href="/"
                  className="text-brand-light/60 hover:text-white transition-colors duration-200 uppercase tracking-widest"
                >
                  Return Policy
                </a>
                <a
                  href="/"
                  className="text-brand-light/60 hover:text-white transition-colors duration-200 uppercase tracking-widest"
                >
                  About Us
                </a>
              </div>
            </div>
          </div>

          <hr className="border-white/10 mt-16 mb-8" />
          <div className="text-center">
            <p className="text-brand-light/50 text-sm font-medium tracking-wide">
              Made with <FaHeart className="inline text-brand-accent mx-1 animate-pulse" /> by Tola
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="md:hidden py-12 px-6">
        <div className="container mx-auto">
          <div className="space-y-12">
            <div>
              <h2 className="text-lg font-bold mb-6 tracking-wider text-brand-accent uppercase">
                Sign Up for Updates
              </h2>
              <form className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Email address or phone number"
                  className="p-3.5 rounded-lg text-brand-dark bg-white/90 focus:outline-none focus:ring-2 focus:ring-brand-accent text-sm"
                />
                <button className="bg-brand hover:bg-brand-accent transition-colors duration-300 text-white py-3.5 rounded-lg font-bold text-sm shadow-md">
                  Subscribe
                </button>
              </form>
            </div>

            <hr className="border-white/10" />

            <div>
              <h2 className="text-lg font-bold mb-6 tracking-wider text-brand-accent uppercase">
                Contact Us
              </h2>
              <div className="space-y-4 text-brand-light/90 text-sm">
                <p className="flex items-center">
                  <FiPhoneCall className="mr-4 text-brand-accent" size={20} />
                  <span>09159373823</span>
                </p>
                <div className="flex items-start pt-2">
                  <CiLocationOn className="mr-4 mt-0.5 text-brand-accent flex-shrink-0" size={24} />
                  <p className="leading-relaxed">
                    14c University Road, Abule Oja,<br />
                    Akoka Yaba Lagos, Yaba. <br />
                    Lagos, Nigeria. 100001
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center space-x-3 text-white/50">
                  <FaCcVisa size={36} />
                  <FaCcMastercard size={36} />
                </div>
                <div className="flex items-center space-x-5 text-brand-light/80">
                  <FaWhatsapp size={28} className="hover:text-[#25D366] transition-colors" />
                  <FaInstagram size={28} className="hover:text-[#E1306C] transition-colors" />
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-8 pt-8 border-t border-white/10">
              <a href="/" className="text-brand-light/60 hover:text-white text-xs uppercase tracking-widest font-medium">
                Return Policy
              </a>
              <a href="/" className="text-brand-light/60 hover:text-white text-xs uppercase tracking-widest font-medium">
                About Us
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-brand-light/40 text-xs tracking-wider">
              Made with <FaHeart className="inline text-brand-accent mx-1" size={10} /> by Tola
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
