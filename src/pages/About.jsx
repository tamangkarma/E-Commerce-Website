import React from 'react';
import { Link } from 'react-router';

const About = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-7xl mx-auto mt-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Welcome to <span className="text-blue-600 font-semibold">TU</span> – Where Quality Meets Convenience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At Your Store Name, we aim to redefine online shopping by offering high-quality products, fast delivery, and unbeatable service. Our mission is to bring convenience, joy, and value to your doorstep.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Wide product range for every lifestyle</li>
            <li>Fast and reliable shipping</li>
            <li>Exceptional customer support</li>
            <li>Safe and secure online shopping</li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
        <p className="text-gray-700 mb-6">
          Follow us on social media, subscribe to our newsletter, and be the first to know about new arrivals, deals, and stories behind the brand.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Explore Our Store
        </Link>
      </div>
    </div>
  );
};

export default About;
