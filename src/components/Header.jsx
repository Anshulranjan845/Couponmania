import React from 'react'
import { Link } from "react-router";
import { COUPON_LOGO_URL } from '../utils/constants';


const Header = () => {
  return (
    <header className="shadow-md bg-gray-600 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        {/* Website Name */}
        <div className="text-2xl font-bold text-rose-600 ">
          <img style={{ height: '70px'}} src={COUPON_LOGO_URL} />
        </div>

        {/* Navigation Section */}
        <nav className="flex items-center space-x-6">
          {/* Navbar Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-white hover:text-rose-600">Stores</a>
            <a href="#" className="text-white hover:text-rose-600">Categories</a>
            <a href="#" className="text-white hover:text-rose-600">Top Offers</a>
            <a href="#" className="text-white hover:text-rose-600">Trending</a>
          </div>

          {/* Login Section */}
          <div className="flex items-center space-x-4">
          <Link to="/signup" className="text-white hover:text-blue-600">Login</Link>
            <a href='/signup' className="bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700">Sign Up</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;