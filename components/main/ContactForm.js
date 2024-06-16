'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Poruka uspešno poslata!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      } else {
        alert('Došlo je do greške pri slanju poruke.');
      }
    } catch (error) {
      alert('Došlo je do greške: ' + error.message);
    }
  };

  return (
    <div id="kontakt" className="max-w-xl mx-auto mt-10 relative z-10">
    <div className="max-w-xl mx-auto mt-10 relative z-10">
      <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Pošaljite nam poruku
      </h1>
      <form onSubmit={handleSubmit} className="bg-[#0300145e] bg-opacity-80 shadow-md rounded z-20 p-6">
        <div className="mb-6">
          <input
            type="text"
            name="firstName"
            placeholder="Ime"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded bg-transparent border-gray-400 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            name="lastName"
            placeholder="Prezime"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded bg-transparent border-gray-400 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded bg-transparent border-gray-400 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="mb-6">
          <textarea
            name="message"
            placeholder="Poruka"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded bg-transparent border-gray-400 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500">
           Pošalji
          </button>
      </div>

      </form>
    </div>
  /</div>
  );
};

export default ContactForm;
