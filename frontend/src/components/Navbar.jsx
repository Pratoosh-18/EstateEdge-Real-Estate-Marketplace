import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { getNavLinks } from '../constants/Navlinks';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  const isLoggedIn = Boolean(localStorage.getItem('realestatert'));

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (path) => {
    navigate(path);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = getNavLinks(isLoggedIn);

  return (
    <>
      <nav className="fixed h-[10vh] w-full z-50 bg-slate-100 p-4 shadow-md flex justify-between items-center">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link to="/" className="text-black text-2xl font-bold flex items-center">
            <p>
              <span className="text-gray-600">Estate</span>Edge
            </p>
          </Link>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <ul
            className={`md:flex md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 absolute md:static bg-slate-100 w-full md:w-auto left-0 md:left-auto transition-all duration-300 ease-in-out ${
              menuOpen ? 'top-[10vh] opacity-100 z-40' : 'top-[-100vh] md:opacity-100 opacity-0'
            }`}
          >
            {navLinks.map(({ name, path }) => (
              <li key={path} className="text-center md:text-left">
                <Link
                  to={path}
                  className={`bg-slate-100 text-sm block py-2 md:py-0 transition duration-300 ${
                    activeLink === path
                      ? 'text-black border-b-2 border-black'
                      : 'text-gray-500 hover:text-black'
                  }`}
                  onClick={() => handleLinkClick(path)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="h-[10vh]"></div>
    </>
  );
};

export default Navbar;
