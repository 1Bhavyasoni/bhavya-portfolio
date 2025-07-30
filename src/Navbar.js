import React from 'react';

const Navbar = () => {
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-md">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto text-white">
        <h1 className="text-2xl font-bold tracking-tight">Bhavya Soni</h1>
        <ul className="flex space-x-6 text-sm font-medium">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-blue-400 transition-all duration-200">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;