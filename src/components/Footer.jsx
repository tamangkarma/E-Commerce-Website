import {
  footerContact,
  footerHelpData,
  footerPData,
  footerSData,
} from "../Data/Data";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="text-white bg-navbar">
        <div className="flex justify-center p-6 gap-14 md:gap-6 lg:gap-10">
          <div >
            <h1 className="text-2xl font-semibold ">Brand Name</h1>
            <h1 className="flex justify-center text-xl font-semibold">Follow us</h1>
            <div className="flex justify-center">
              <FaFacebook size={40} className="p-2" />
              <FaInstagram size={40} className="p-2" />
              <FaYoutube size={40} className="p-2" />
            </div>
          </div>
          <div className="hidden sm:flex sm:gap-10 lg:gap-20">
            <ul>
              <div className="cursor-pointer">
                <h1 className="text-2xl font-semibold hover:underline hover:text-red-200">Products</h1>
                {footerPData.map((item, index) => (
                  <li key={index} className="p-1 hover:text-red-400">
                    {item.name}
                  </li>
                ))}
              </div>
            </ul>

            <ul>
              <div className="cursor-pointer">
                <h1 className="text-2xl font-semibold hover:underline hover:text-red-300">Services</h1>
                {footerSData.map((item, index) => (
                  <li key={index} className="p-1 hover:text-red-400">
                    {item.name}
                  </li>
                ))}
              </div>
            </ul>

            <ul>
              <div className="cursor-pointer">
                <h1 className="text-2xl font-semibold hover:underline hover:text-red-300">Help</h1>
                {footerHelpData.map((item, index) => (
                  <li key={index} className="p-1 hover:text-red-400">
                    {item.name}
                  </li>
                ))}
              </div>
            </ul>

            <ul>
              <div className="cursor-pointer">
                <h1 className="text-2xl font-semibold hover:underline hover:text-red-200">Contact</h1>
                {footerContact.map((item, index) => (
                  <li key={index} className="p-1 hover:text-red-400">
                    <div className="flex items-center gap-2">
                      {item.icon && <item.icon size={20} />}
                      <span>{item.name}</span>
                    </div>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>

        <div className="hidden p-4 sm:flex sm:justify-center sm:items-center ">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <img
              src="/Mastercard_2019_logo.png"
              alt="Visa"
              className="object-contain w-20 h-12 p-2 bg-white"
            />
            <img
              src="/esewa.png"
              alt="Mastercard"
              className="object-contain w-20 h-12 p-2 bg-white"
            />
            <img
              src="/google pay logo.png"
              alt="Google Pay"
              className="object-contain w-20 h-12 p-2 bg-white"
            />
            <img
              src="/VISA-logo.png"
              alt="Visa"
              className="object-contain w-20 h-12 p-2 bg-white"
            />
            <img
              src="/Paypal-Logo-2014.png"
              alt="PayPal"
              className="object-contain w-20 h-12 p-2 bg-white"
            />
          </div>
        </div>

        <div>
          <p className="p-4 text-sm text-center">
            © 2025 Brand Name. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
