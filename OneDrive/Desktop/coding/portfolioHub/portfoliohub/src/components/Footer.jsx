import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-32 text-center md:text-left">
          
          {/* Brand or Logo */}
          <div>
            <h2 className="text-2xl font-bold">My Portfolio</h2>
            <p className="mt-4">Creating impactful solutions through clean and responsive web designs.</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-gray-400">About Me</a></li>
              <li><a href="/portfolio" className="hover:text-gray-400">Projects</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://github.com" className="hover:text-gray-400">
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a href="https://linkedin.com" className="hover:text-gray-400">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="https://twitter.com" className="hover:text-gray-400">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="https://instagram.com" className="hover:text-gray-400">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; 2024 My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;