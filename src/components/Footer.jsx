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
      <div className=" bg-navbar text-white ">
        <div className="p-12 flex justify-center gap-14 md:gap-6 lg:gap-10 flex-wrap">
          <div className="pr-10">
            <h1 className="text-2xl font-semibold pl-2">Brand Name</h1>
            <h1 className="text-xl font-semibold pl-2">Follow us</h1>
            <div className="flex ">
              <FaFacebook size={40} className="p-2" />
              <FaInstagram size={40} className="p-2" />
              <FaYoutube size={40} className="p-2" />
            </div>
          </div>
          <ul>
            <div>
              <h1 className="text-2xl font-semibold">Products</h1>
              {footerPData.map((item, index) => (
                <li key={index} className="p-1">
                  {item.name}
                </li>
              ))}
            </div>
          </ul>

          <ul>
            <div>
              <h1 className="text-2xl font-semibold">Services</h1>
              {footerSData.map((item, index) => (
                <li key={index} className="p-1">
                  {item.name}
                </li>
              ))}
            </div>
          </ul>

          <ul>
            <div>
              <h1 className="text-2xl font-semibold">Help</h1>
              {footerHelpData.map((item, index) => (
                <li key={index} className="p-1">
                  {item.name}
                </li>
              ))}
            </div>
          </ul>

          <ul>
            <div>
              <h1 className="text-2xl font-semibold">Contact</h1>
              {footerContact.map((item, index) => (
                <li key={index} className="p-1">
                  <div className="flex items-center gap-2">
                    {item.icon && <item.icon size={20} />}
                    <span>{item.name}</span>
                  </div>
                </li>
              ))}
            </div>
          </ul>
        </div>

        <div className="flex justify-center items-center  py-4">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <img
              src="/public/Mastercard_2019_logo.png"
              alt="Visa"
              className="h-12 w-20 object-contain bg-white p-2"
            />
            <img
              src="/public/esewa.png"
              alt="Mastercard"
              className="h-12 w-20 object-contain bg-white p-2"
            />
            <img
              src="/google pay logo.png"
              alt="Google Pay"
              className="h-12 w-20 object-contain bg-white p-2"
            /> 
            <img
              src="/public/VISA-logo.png"
              alt="Visa"
              className="h-12 w-20 object-contain bg-white p-2"
            />
            <img
              src="/public/Paypal-Logo-2014.png"
              alt="PayPal"
              className="h-12 w-20 object-contain bg-white p-2"
            />
          </div>
        </div>

        <div>
          <p className="text-center text-sm p-4">
            © 2025 Brand Name. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
