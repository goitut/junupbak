import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";




function Footer() {
  return (
    <>
      <footer class="bg-amber-100 flex flex-col space-y-10 justify-center m-10  bottom-0 shadow-md">

    <nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium mt-1">
      <Link to="/" className='hover:text-gray-900'>Home</Link>
      <Link to="/menu" className='hover:text-gray-900'>Menu</Link>
      <Link to="/about" className='hover:text-gray-900'>About Us</Link>
      <Link to="/contact" className='hover:text-gray-900'>Contact Us</Link>
    </nav>

    <div class="flex justify-center space-x-5">
        <Link to="www.facebook.com" target='_blank'>
            <FaFacebook />
        </Link>
        <Link to="www.twitter.com" target='_blank'>
            <BsTwitterX />
        </Link>
        <Link to="www.instagram.com" target='_blank'>
            <FaInstagram />
        </Link>
    </div>
    <p class="text-center text-gray-700 font-medium">&copy; 2025 Junupbak Ltd. All rights reservered.</p>
</footer>
    </>
  )
}

export default Footer