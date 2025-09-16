import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/images/background.jpg';



function Home() {

  return (
    <>
      <section className=' mb-5' style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', height: '300px', width: '100%', filter: ''}}>
        <div className='text-center mt-1 mb-10'>
          <h1 className='text-5xl font-serif text-white'>JUNUP BAKERY</h1>
          <p className='text-1xl font-tt hoves text-white'>From Sunday to Monday 24/7</p>
        </div>
        <div className='text-center'>
          <p className='mb-5 text-white text-2xl'>Discover a world of freshly baked breads, pastries, and cakes made with love, tradition, and a touch of creativity. At JUNUPBAK, we believe baking is more than food — it’s an experience of warmth, joy, and unforgettable flavor. Browse our menu, order online, and let us bring sweetness to your everyday moments</p>
           <Link to="menu">
            <button className='bg-blue-700  text-3xl rounded-md cursor-pointer mb-5 text-white'>ORDER NOW</button>
          </Link>
        </div>
      </section>
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-dark mb-5 text-center">Our Goodies</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="src/assets/images/Cinnamon Roll.jpg" alt="Classic Vanilla Sponge" class="w-full h-64 object-cover" />
            <div class="p-6">
              <h3 class="font-bold text-xl text-dark mb-1">Classic Vanilla Sponge</h3>
              <p class="text-primary-600 font-medium mb-3">Cake</p>
              <p class="text-gray-600">Soft and fluffy vanilla sponge layered with smooth buttercream frosting.</p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="src/assets/images/sudanese.jpg" alt="Sudanese Baguette" class="w-full h-64 object-cover" />
            <div class="p-6">
              <h3 class="font-bold text-xl text-dark mb-1">Sudanese Baguette</h3>
              <p class="text-primary-600 font-medium mb-3">Bread</p>
              <p class="text-gray-600">Crispy golden crust with a soft, airy inside, perfect for sandwiches..</p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="src/assets/images/Cinnamon Roll.jpg" alt="Cinnamon Roll" class="w-full h-64 object-cover" />
            <div class="p-6">
              <h3 class="font-bold text-xl text-dark mb-1"> Cinnamon Roll</h3>
              <p class="text-primary-600 font-medium mb-3">Pastries </p>
              <p class="text-gray-600">Sweet pastry swirled with cinnamon sugar and topped with cream glaze.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home