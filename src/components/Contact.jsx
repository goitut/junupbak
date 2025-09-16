import React, {useState} from 'react'
import emailjs from '@emailjs/browser';


function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSumit = (e) => {
    e.preventDefault();

    const serviceId = 'service_by6pd7q';
    const templateId = 'template_x0u81c8';
    const publicKey = 'CIAEpqRrCwfqoLpR4';

    const templateParam = {
      form_name: name,
      form_email: email,
      to_name: 'Goi Naath',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParam, publicKey)
    .then((response) =>{
      console.log('Email sent successfully!', response);
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) =>{
      console.log('Error sending email:', error);
    });
  }

  return (
   <div class="bg-white">
      <header class="bg-blue-700 text-white text-center py-12">
        <h1 class="text-4xl font-bold mt-16">Contact Us</h1>

      </header>
      <section class="text-center py-12 px-4">
        <h2 class="text-2xl font-bold">Get In Touch</h2>
        <p class="mt-4 text-gray-700 max-w-2xl mx-auto">We are here to help you. Reach out to us via any of the following methods.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
          <div class="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
            <h3 class="text-xl font-bold">Call Us</h3>
            <p class="text-gray-700 mt-2">+256 788 326 787</p>
          </div>
          <div class="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
            <h3 class="text-xl font-bold">Email Us</h3>
            <p class="text-gray-700 mt-2">goitutriay@gmail.com</p>
          </div>
          <div class="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
            <h3 class="text-xl font-bold">Visit Us</h3>
            <p class="text-gray-700 mt-2">123 Health St, Wellness City</p>
          </div>
        </div>
      </section>
      <section class="bg-gray-100 py-12 px-4">
        <h2 class="text-2xl font-bold text-center">Send Us A Message</h2>
        <form onClick={handleSumit} class="max-w-2xl mx-auto mt-8 space-y-8">
          <div>
            <label  class="block text-gray-700 font-bold">Name</label>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} class="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
          </div>
          <div>
            <label  class="block text-gray-700 font-bold">Email</label>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} class="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
          </div>
          <div>
            <label  class="block text-gray-700 font-bold">Message</label>
            <textarea placeholder="message" rows="5" class="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <button  type="submit" class="w-full bg-blue-700 text-white py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors">Send Message</button>
        </form>
      </section>
      <section class="text-center py-12 px-4">
        <h2 class="text-2xl font-bold">Frequently Asked Questions</h2>
        <div class="mt-8">
          <div class="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
            <h3 class="text-xl font-bold">What are your operating hours?</h3>
            <p class="mt-2 text-gray-700">We operate from 9 AM to 5 PM, Monday to Friday.</p>
          </div>
          <div class="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
            <h3 class="text-xl font-bold">How can I book an appointment?</h3>
            <p class="mt-2 text-gray-700">You can book an appointment through our website or by calling our office.</p>
          </div>
          <div class="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90  mt-4">
            <h3 class="text-xl font-bold">Do you offer telemedicine services?</h3>
            <p class="mt-2 text-gray-700">Yes, we offer telemedicine consultations.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact