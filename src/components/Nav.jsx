import { useState } from "react";
import { NavLink, Link } from "react-router";
import { navData } from "../Data/Data";
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
            <p className="text-xl font-bold">Brand</p>
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
                    <input type="text" placeholder="Search here..." className="p-2 rounded-full w-64 h-8 " />
                </div>
              <li className="text-gray-300 hover:text-gray-400 hidden md:flex lg:flex">
                <Link to="/cart">
                  <div className="relative">
                    <div className="absolute left-5 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500">
                      <p>0</p>
                    </div>
                    <MdShoppingCartCheckout size={27} color="white" />
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
