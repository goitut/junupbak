import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ImUser } from "react-icons/im";
import { BiCartAdd } from "react-icons/bi";



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-2 w-full z-20">
      <div className="container mx-auto px-6 flex justify-between items-center flex-wrap">
        {/* Logo and Brand Name */}
        <Link to="/" className="flex items-center my-3 space-x-3 rtl:space-x-reverse">
            {/* <img 
              src={logo} 
              className="h-8" 
              alt="Zekeinnovate Logo" 
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/200x50/cccccc/ffffff?text=Logo+Error'; }}
            /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-600">JUNUPBAK</span>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden cursor-pointer p-2 rounded-md hover:bg-gray-100"
          aria-controls="menu-links"
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path>
          </svg>
        </button>

        {/* Menu Links */}
        <div 
          id="menu-links" 
          className={`${isOpen ? 'flex' : 'hidden'} w-full flex-col py-2 md:flex md:w-auto md:flex-row md:items-center md:space-x-4 md:py-0`}
        >
          <Link to="/" className="block w-full text-center md:w-auto text-gray-600 hover:text-blue-600 px-3 py-3 md:py-2 rounded-md text-sm font-medium">Home</Link>
          <Link to="/menus" className="block w-full text-center md:w-auto text-gray-600 hover:text-blue-600 px-3 py-3 md:py-2 rounded-md text-sm font-medium">Menu</Link>
          <Link to="/about" className="block w-full text-center md:w-auto text-gray-600 hover:text-blue-600 px-3 py-3 md:py-2 rounded-md text-sm font-medium">About Us</Link>
          <Link to="/contact" className="block w-full text-center md:w-auto text-gray-600 hover:text-blue-600 px-3 py-3 md:py-2 rounded-md text-sm font-medium">Contact Us</Link>
          {/* <Link to="/users" className="block w-full text-center md:w-auto text-gray-600 hover:text-blue-600 px-3 py-3 md:py-2 rounded-md text-sm font-medium">Users</Link> */}
          <Link to="/dashboard" className="block w-full text-center md:w-auto text-gray-600 hover:text-blue-600 px-3 py-3 md:py-2 rounded-md text-sm font-medium">Dashboard</Link>

        </div>
        <div className='flex gap-1'>
          <Link to="">
              <ImUser />
          </Link>
          <Link to="">
              <BiCartAdd />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar