import React from 'react'

function About() {
  return (
    <div className='container mx-auto px-6 py-16'> 
           <section class="mb-20">
            <div class="flex flex-col md:flex-row items-center gap-12">
                <div class="md:w-1/2">
                    <h2 class="text-3xl font-bold text-dark mb-6">Our Story</h2>
                    <p class="text-gray-700 mb-4">At JUNUPBAK, our journey began with the simple love of sharing fresh, homemade bread with neighbors and friends. What started as a small kitchen experiment quickly grew into a passion for crafting artisanal treats that bring people together. We believed that every loaf, pastry, and cake should carry a story — a story of warmth, family, and the joy that only freshly baked goods can bring.
                    </p>
                    <p class="text-gray-700 mb-4">Over time, our little bakery dream blossomed into JUNUPBAK, a place where tradition meets creativity. We carefully source local ingredients, blending classic recipes with modern twists to create unique flavors for every occasion. From buttery croissants and golden breads to colorful seasonal cakes, each creation reflects our commitment to quality, artistry, and care. Our shelves are more than just displays of food; they are showcases of our dedication to baking with heart.
                    </p>
                </div>
                <div class="md:w-1/2">
                    <img src="src/assets/bak.jpg" alt="AI Neural Network Visualization" class="rounded-lg shadow-xl w-full h-auto" />
                </div>
            </div>
        </section>
        <section class="bg-primary-50 rounded-xl p-12 mb-20">
            <div class="text-center max-w-4xl mx-auto">
                <h2 class="text-3xl font-bold text-dark mb-6">Our Mission</h2>
                <p class="text-xl text-gray-700 mb-8">At JUNUPBAK, our mission is to spread joy through the art of baking. We are dedicated to crafting fresh, high-quality breads, pastries, and cakes that bring warmth to every table. By blending traditional recipes with creative innovation and using responsibly sourced ingredients, we aim to create baked goods that not only taste exceptional but also celebrate community, family, and togetherness.</p>
                <div class="flex flex-wrap justify-center gap-8">
                    <div class="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
                        <div class="text-primary-600 mb-4">
                            <i class="fas fa-lightbulb text-3xl"></i>
                        </div>
                        <h3 class="font-bold text-dark mb-2">Augmented Intelligence</h3>
                        <p class="text-gray-600">We build tools that enhance human cognition, not replace it.</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
                        <div class="text-primary-600 mb-4">
                            <i class="fas fa-shield-alt text-3xl"></i>
                        </div>
                        <h3 class="font-bold text-dark mb-2">Ethical Framework</h3>
                        <p class="text-gray-600">Every system undergoes rigorous ethical review before deployment.</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
                        <div class="text-primary-600 mb-4">
                            <i class="fas fa-project-diagram text-3xl"></i>
                        </div>
                        <h3 class="font-bold text-dark mb-2">Neural Synthesis</h3>
                        <p class="text-gray-600">Our proprietary architecture mimics human neural pathways.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="mb-20">
            <h2 class="text-3xl font-bold text-dark mb-12 text-center">Meet Our Bakers</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="CEO" class="w-full h-64 object-cover" />
                    <div class="p-6">
                        <h3 class="font-bold text-xl text-dark mb-1">  Daniel Otieno</h3>
                        <p class="text-primary-600 font-medium mb-3">Pastry Chef</p>
                        <p class="text-gray-600">Daniel is our creative mind behind JUNUPBAK’s signature cakes and desserts. A graduate in Pastry Arts, he has worked in several top hotels before joining our team. His keen eye for detail and flair for design allow him to turn every cake into a piece of edible art, perfect for celebrations big or small.</p>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="CTO" class="w-full h-64 object-cover" />
                    <div class="p-6">
                        <h3 class="font-bold text-xl text-dark mb-1">Mary Wanjiru</h3>
                        <p class="text-primary-600 font-medium mb-3">Head Baker</p>
                        <p class="text-gray-600">With over 15 years of experience in artisanal baking, Mary leads our kitchen with unmatched passion and skill. She trained at a renowned culinary institute in Paris and has mastered both classic and contemporary baking techniques. Her expertise ensures that every loaf of bread and every pastry meets the highest standard of taste and quality.</p>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Chief Ethics Officer" class="w-full h-64 object-cover" />
                    <div class="p-6">
                        <h3 class="font-bold text-xl text-dark mb-1"> Aisha Mohamed</h3>
                        <p class="text-primary-600 font-medium mb-3">Customer Experience Manager </p>
                        <p class="text-gray-600">Aisha ensures that every customer’s journey with JUNUPBAK is warm and memorable. With a background in hospitality and business management, she is dedicated to creating a welcoming environment both in-store and online. From handling custom orders to making sure every guest feels valued, Aisha is the heart of our customer service.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About