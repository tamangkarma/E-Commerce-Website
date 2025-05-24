import { useState } from "react";
import { NavLink, Link } from "react-router";
import { navData } from "../Data/Data";
import { FiShoppingBag } from "react-icons/fi";
//icons
import { MdShoppingCartCheckout } from "react-icons/md";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      <nav className="bg-navbar p-4 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <div>
          <FiShoppingBag size={30} className="text-primary text-3xl" />
          </div>
          <ul className="hidden space-x-6 md:flex ">
            {navData.map((item, index) => (
              <li key={index} className="text-white hover:text-gray-200">
                <NavLink to={item.url}>{item.title}</NavLink>
              </li>
            ))}
          </ul>
           <div className="flex items-center justify-center space-x-4">
                <div>
                    <input type="text" placeholder="Search here..." className="p-2 rounded-lg text-black w-64 h-8 placeholder-gray-500 placeholder:text-sm placeholder:pl-2" />
                </div>
              <li className="text-gray-300 hover:text-gray-400 hidden md:flex lg:flex">
                <Link to="/cart">
                  <div className="relative">
                    <div className="absolute left-6 top-[-6px] flex h-4 w-4 items-center justify-center rounded-full bg-white text-red-500 text-xs">
                      <p>3</p>
                    </div>
                    <MdShoppingCartCheckout size={30} color="white" />
                  </div>
                </Link>
              </li>
            </div>
            
          <button
            className="text-gray-300 focus:outline-none md:hidden"
            id="menu-button"
            onClick={handleMobileMenuClick}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <ul
          className={`flex-col space-y-2 p-4 md:hidden ${
            mobileMenuOpen ? "" : "hidden"
          }`}
          id="mobile-menu"
        >
          {navData.map((item, index) => (
            <li key={index} className="text-gray-300 hover:text-gray-400">
              <NavLink to={item.url}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
