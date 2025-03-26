import emailjs from '@emailjs/browser';
import React, { useState } from 'react'

const NewsLetter = () => {
    emailjs.init(import.meta.env.VITE_USER_ID);
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        const serviceId = import.meta.env.VITE_SERVICE_ID;
        const templateId = import.meta.env.VITE_TEMPLATE_ID;
        const userId = import.meta.env.VITE_USER_ID;
    
        const templateParams = {
          email: email,
        };
    
        emailjs.send(serviceId, templateId, templateParams, userId)
          .then(response => {
            alert("Subscription successful!");
            setEmail("")
          })
          .catch(error => {
            alert("Subscription failed. Please try again."+error);
          });
      };

  return (
    <div className="p-6 max-w-screen mx-auto bg-gray-900 text-white shadow-lg w-full mt-4">
      <h1 className="text-3xl font-bold mb-4 text-rose-600">Exclusive Coupons & Deals</h1>
      <p className="mb-10">Subscribe to get the latest coupons directly to your inbox!</p>
      <div className="flex pr-10 mb-6 mx-auto pr-4 ml-12">
        <input 
          type="email" 
          className='w-2/3 p-6 ml-4 rounded-l-lg border-2 border-rose-200 focus:outline-none'
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className='bg-rose-600 text-white p-2 w-1/5 text-xl font-semibold cursor-pointer rounded-r-md' onClick={handleSubscribe}>SUBSCRIBE</button>
      </div>
      </div>
  )
}

export default NewsLetter
