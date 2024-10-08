'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-gray-900 sticky top-0 py-2 px-4 z-[1000]">
      <Link
        href="/"
        className="flex items-center text-xl font-bold text-white no-underline m-4"
      >
        Faraz Website
      </Link>

      <div
        className="menu md:hidden flex flex-col justify-between w-9 h-8 cursor-pointer"
        onClick={toggleMenu}
      >
        <span className="block h-1 w-full bg-white rounded-sm transition-colors duration-300"></span>
        <span className="block h-1 w-full bg-white rounded-sm transition-colors duration-300"></span>
        <span className="block h-1 w-full bg-white rounded-sm transition-colors duration-300"></span>
      </div>

      <ul
        className={`flex gap-4 transition-transform duration-300 md:flex-row items-center md:static md:flex ${
          menuOpen
            ? 'flex flex-col absolute top-full left-0 w-full bg-gray-900'
            : 'hidden md:flex'
        }`}
      >
        <li className="list-none">
          <Link
            href="/"
            onClick={toggleMenu}
            className="block text-white no-underline p-4 rounded-md hover:bg-red-600 hover:text-black font-medium transition-all duration-300"
          >
            Home
          </Link>
        </li>
        <li className="list-none">
          <Link
            href="/about"
            onClick={toggleMenu}
            className="block text-white no-underline p-4 rounded-md hover:bg-red-600 hover:text-black font-medium transition-all duration-300"
          >
            About
          </Link>
        </li>
        <li className="list-none">
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="block text-white no-underline p-4 rounded-md hover:bg-red-600 hover:text-black font-medium transition-all duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
