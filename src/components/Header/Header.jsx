import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  // State to handle the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function to show/hide the menu
  const handleHambur = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="w-full h-20 bg-blue-950 flex items-center justify-between px-10 fixed md:px-20">
        <div>
          <Link to="/">
            <p className="text-2xl font-extrabold text-orange-400">FAIYAZ.</p>
          </Link>
        </div>

        {/* Desktop menu */}
        <div>
          <ul className="hidden md:flex text-xl gap-6 text-blue-300 font-medium">
            <li>
              <NavLink to="/"  
                className={({isActive}) => `${isActive ? "text-orange-500" : "text-blue-300"} hover:text-orange-300`}
                >
                  Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/About"  
              className={({isActive}) => `${isActive ? "text-orange-500" : "text-blue-300"} hover:text-orange-300`}
              >
                About
              </NavLink>
            </li>
            
            <li>
              <NavLink to="/Projects" 
              className={({isActive}) => `${isActive ? "text-orange-500" : "text-blue-300"} hover:text-orange-300`}
              >
                Projects
              </NavLink>
            </li>
           
            <li>
              <NavLink to="/Contact" 
              className={({isActive}) => `${isActive ? "text-orange-500" : "text-blue-300"} hover:text-orange-300`}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden text-white">
          <button onClick={handleHambur}>
            <MenuIcon sx={{ fontSize: 40 }} />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-20 right-0 w-full bg-blue-950 text-center pb-6 md:hidden">
            <ul className="flex flex-col text-xl gap-4 text-blue-300 font-medium py-4">
              <li>
                <NavLink to="/" 
                className={({isActive}) => `${isActive ? "text-orange-500" : "text-blue-300"} hover:text-orange-300`}
                onClick={handleHambur} >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" 
                  className={({isActive}) => `${isActive ? "text-orange-500" : "text-blue-300"} `}
                  onClick={handleHambur}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" 
                  className={({isActive}) => `${isActive ? "text-orange-500" : "text-blue-300"} `}
                  onClick={handleHambur}>
                  Projects
                </NavLink>
              </li>
             
              <li>
                <NavLink to="/contact" 
                  className={({isActive}) => `${isActive ? "text-orange-500" : "text-blue-300"} `}
                  onClick={handleHambur}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
