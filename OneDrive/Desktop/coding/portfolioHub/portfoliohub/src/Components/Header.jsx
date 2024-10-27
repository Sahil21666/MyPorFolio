import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Container from './Container';

function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu toggle

  const navItems = [
    { name: 'Home', slug: "/" }, 
    { name: "About", slug: "/about" },
    { name: "Portfolio", slug: "/portfolio" },
    { name: "Contact", slug: "/contact" }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle mobile menu
  };

  return (
    <header className='py-3 shadow bg-white'>
      <Container>
        <nav className='flex justify-between items-center'>
          {/* Logo */}
          <div className='text-3xl font-semibold'>
            <span className='text-pink-500'>Sahil</span> Meshram
          </div>

          {/* Desktop Menu */}
          <ul className='hidden md:flex space-x-6'>
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Hamburger Icon for mobile */}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-3xl'>
              &#9776; {/* Hamburger icon */}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='md:hidden mt-4'>
            <ul className='flex flex-col space-y-4'>
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      navigate(item.slug);
                      setIsOpen(false); // Close menu after navigation
                    }}
                    className='block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Header;