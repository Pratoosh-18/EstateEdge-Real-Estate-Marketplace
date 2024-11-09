import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <footer className="bg-white text-gray-800 py-6 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-base md:text-xl font-bold mb-2">EstateEdge | Real Estate Marketplace</h1>
            <p className="text-sm text-gray-600">Connecting you with your dream home.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex text-sm flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
            <Link onClick={scrollToTop} to="/" className="text-gray-800 hover:text-blue-600 transition-colors">Home</Link>
            <Link onClick={scrollToTop} to="/about" className="text-gray-800 hover:text-blue-600 transition-colors">About Us</Link>
            <Link onClick={scrollToTop} to="/listings" className="text-gray-800 hover:text-blue-600 transition-colors">Listings</Link>
            {/* <Link to="/" className="text-gray-800 hover:text-blue-600 transition-colors">Contact</Link> */}
          </div>

          {/* Social Media Icons */}
          <div className="text-sm flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 pt-4 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} EstateEdge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;