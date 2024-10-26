import React, { useState } from 'react';
import 'animate.css';
import axios from 'axios'

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to the backend
    axios.post('http://localhost:5000/api/contact', formData)
      .then(response => {
        console.log(response.data);
        alert('Form submitted successfully!');
      })
      .catch(error => {
        console.error('There was an error!', error);
        alert('Error submitting form');
      });
  };

  return (
    <section className="bg-gray-900 text-white py-8 animate-fade-in duration-200">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto px-4 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
          rows={4} 
        />
        <button
          type="submit"
          className="w-full bg-pink-500 py-2 px-4 rounded text-white hover:bg-pink-600 transition duration-300"
        >
          Submit
        </button>
      </form>
      <div className="text-center mt-8 px-4">
        <p>Email: <span className="text-pink-500">sahilmeshram222@gmail.com</span></p>
        <p>Phone: <span className="text-pink-500">7020835660</span></p>
        <div className="flex justify-center space-x-4 mt-4 flex-wrap">
          <a href="facebook-link" className="text-pink-500 hover:text-white transition duration-300">Facebook</a>
          <a href="twitter-link" className="text-pink-500 hover:text-white transition duration-300">Twitter</a>
          <a href="instagram-link" className="text-pink-500 hover:text-white transition duration-300">Instagram</a>
          <a href="linkedin-link" className="text-pink-500 hover:text-white transition duration-300">LinkedIn</a>
        </div>
        <a
          href="../MyCv/Academic_CV_Template__3_.pdf"
          download
          className="inline-block mt-4 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition duration-300"
        >
          Download CV
        </a>
        <br/>
        <br/>
        <br/>
      </div>
      <hr/>
    </section>
    
  );
}

export default Contact;