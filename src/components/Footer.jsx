import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineBakeryDining } from "react-icons/md";


function Footer() {
  return (
    <>
      <section className=' px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  shadow-md '>
        <div className='text-center text-md-start '>
          <div className='mt-3'>
            <div  className=' mb-1'>
              <h6 className='text-uppercase fw-bold '>
                Company name <MdOutlineBakeryDining />
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className='flex gap-3'>
              <div className='block mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p><Link to="/">Home   </Link></p>
                <p> <Link to="/menus"> Menus </Link></p>
                <p><Link to="/about">  About Us  </Link> </p>
                <p><Link to="/contact"> Contact </Link> </p>
              </div>

              <div className='block mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>New York, NY 10012, US</p>
                <p>  junupbak@gmail.com   </p>
                <p>+ 01 234 567 88</p>
                <p>+ 01 234 567 89  </p>
              </div>

              <div className=' text-left block'>
                <div className=' ml-2'>
                  <span>Get connected with us on social networks:</span>
                </div>
                <div className=' block gap-6 text-5xl '>
                  <Link to="www.facebook.com" className='text-blue-700' >
                    <FaFacebook />
                  </Link>
                  <Link to="/" className='' >
                    <IoLogoTwitter />
                  </Link>
                  <Link to="/" className='' >
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer