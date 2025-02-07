import React, { useState } from "react";
import { Link } from "react-scroll";
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const[isMenuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const handleClick = (a) => {
    setActiveLink(a);  // Set active link on click
    setMenuOpen(false);
  };

  const handleHambur = () =>{
    setMenuOpen(!isMenuOpen); // Toggle the state
  }

  return (
    <header>
      <nav className="w-full h-20 bg-blue-950 flex items-center justify-between px-10 md:px-20 fixed top-0 left-0 z-50">
        <div>
          <Link to="">
            <p className="text-2xl font-extrabold text-orange-400">FAIYAZ.</p>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex text-xl gap-6 text-blue-300 font-medium">
          <li>
            <Link to="home"
             onClick={() => handleClick('home')}
             className={`cursor-pointer ${activeLink === 'home' ? 'text-blue-500 font-bold border-b-2 border-blue-500' : ''}`}
             smooth={true} offset={0} duration={500} >
              Home
            </Link>
          </li>
          <li>
            <Link to="about"  
            onClick={() => handleClick('about')}
            className={`cursor-pointer ${activeLink === 'about' ? 'text-blue-500 font-bold border-b-2 border-blue-500' : ''}`}
            smooth={true} offset={-80} duration={500} >
              About
            </Link>
          </li>
          <li>
            <Link to="projects"  
              onClick={() => handleClick('projects')}
              className={`cursor-pointer ${activeLink === 'projects' ? 'text-blue-500 font-bold border-b-2 border-blue-500' : ''}`}
              smooth={true} offset={-80} duration={500}  >
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" 
             onClick={() => handleClick('contact')}
             className={`cursor-pointer ${activeLink === 'contact' ? 'text-blue-500 font-bold border-b-2 border-blue-500' : ''}`}
             smooth={true} offset={-80} duration={500} >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={handleHambur} className="md:hidden text-white text-2xl" aria-label="Toggle Menu">
          <MenuIcon fontSize="large" />
        </button>

         {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-blue-950 text-center md:hidden">
            <ul className="text-xl text-blue-300 font-medium flex flex-col gap-4 py-5">
            <li>
                <Link to="home"
                  
                  smooth={true} 
                  offset={-80} 
                  duration={500} 
                  
                  onClick={() => handleClick('home')}
                  className={`cursor-pointer ${activeLink === 'home' ? 'text-blue-500 font-bold border-b-2 border-blue-500' : ''}`}

                  >
                  Home
                </Link>
              </li>
              <li>
                <Link to="about"
                 smooth={true} offset={-80} duration={500} 
                 onClick={() => handleClick('about')}
                  className={`cursor-pointer ${activeLink === 'about' ? 'text-blue-500 font-bold border-b-2 border-blue-500' : ''}`}
                 >
                  About
                </Link>
              </li>
              <li>
                <Link to="projects"  smooth={true} offset={-80} duration={500} 
                onClick={() => handleClick('projects')}
                className={`cursor-pointer ${activeLink === 'projects' ? 'text-blue-500 font-bold border-b-2 border-blue-500' : ''}`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link to="contact"  smooth={true} offset={-80} duration={500} 
                onClick={() => handleClick('contact')}
                className={`cursor-pointer ${activeLink === 'contact' ? 'text-blue-500 font-bold border-b-2 border-blue-500' : ''}`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}

      </nav>
    </header>
  );
}
