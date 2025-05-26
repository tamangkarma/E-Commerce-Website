import React from 'react';
import { Link } from 'react-router'; 
import { useCart } from '../store/cartStore'; // Import Zustand cart store
import { CiShoppingCart } from "react-icons/ci";
const Cart = () => {
  // List of desserts to display
  const desserts = [
    {
      id: 1,
      name: "I phone 16",
      type: "Phone",
      price: "225000",
      img: "https://cdn.gadgetbytenepal.com/wp-content/uploads/2024/09/iPhone-16-Black.jpg",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      type: "Phone",
      price: "199000",
      img: "https://m.media-amazon.com/images/I/71-EnPs+uQL._AC_SL1500_.jpg",
    },
    {
      id: 3,
      name: "Roblox Digital Gift Card",
      type: "Robux",
      price: "5000",
      img: "https://m.media-amazon.com/images/I/71nvKD9L-iL._SL1500_.jpg",
    },
    {
      id: 4,
      name: "JBL PartyBox Club 120",
      type: "speaker",
      price: "3500",
      img: "https://m.media-amazon.com/images/I/71WbvaRp9PL._AC_SL1500_.jpg",
    },
    {
      id: 5,
      name: "Beats Studio Pro",
      type: "headphones",
      price: "5250",
      img: "https://m.media-amazon.com/images/I/51t0IE0zjaL._AC_SL1500_.jpg",
    },
    {
      id: 6,
      name: "Beats Studio Buds",
      type: "headphones",
      price: "2699",
      img: "https://m.media-amazon.com/images/I/51bRSWrEc7S._AC_SL1500_.jpg",
    },
    {
      id: 7,
      name: "Smart Watch",
      type: "Watch",
      price: "1699",
      img: "https://m.media-amazon.com/images/I/61i+0kcHyBL._AC_SL1500_.jpg",
    },
    {
      id: 8,
      name: "Xbox Wireless Controller",
      type: "Controller",
      price: "2999",
      img: "https://m.media-amazon.com/images/I/71ehTh38k7L._SL1500_.jpg",
    },
    {
      id: 9,
      name: "ASUS TUF Gaming",
      type: "graphics card",
      price: "23599",
      img: "https://m.media-amazon.com/images/I/815-M4vy8JL._AC_SL1500_.jpg",
    },
  ];
  

  // Get cart data and functions from Zustand
  const addToCart = useCart((state) => state.addToCart);

  return (
    <div className="min-h-screen  p-8 text-[#3d3d3d] font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8 text-[#2f1c1c]">Electronics</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Dessert Cards Grid */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {desserts.map((dessert) => (
              <Link
                key={dessert.id}
                to={`/desserts/${dessert.id}`} // Link to detail page
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col justify-between p-3 h-full"
              >
                <div className="relative">
                  <img
                    src={dessert.img}
                    alt={dessert.name}
                    className="rounded-lg m-6 h-48 object-cover"
                  />
                  {/* Add to Cart Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault(); // Prevent link navigation
                      addToCart(dessert); // Call Zustand action
                    }}
                    className="absolute right-3 bg-[#f8f1e8] text-[#d4492b] rounded-lg py-2 text-sm font-semibold hover:bg-[#f3e3d6]"
                  >
                    <CiShoppingCart className="inline w-10 h-5" />
                  </button>
                </div>
                <div>
                  <h2 className="text-base font-medium leading-tight mb-1">
                    {dessert.name}
                  </h2>
                  <p className="text-sm text-gray-500 mb-1">{dessert.type}</p>
                  <p className="text-[#d4492b] font-semibold text-sm">
                    Rs {dessert.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;