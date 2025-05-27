import { Link } from 'react-router'; 
import { useCart } from '../store/cartStore'; // Import Zustand cart store
import { CiShoppingCart } from "react-icons/ci";
import { electronics } from '../Data/Data';


const Cart = () => {
  
  // Get cart data and functions from Zustand
  const addToCart = useCart((state) => state.addToCart);

  return (
    <div className="min-h-screen  p-8 text-[#3d3d3d] font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8 text-[#2f1c1c]">Electronics</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Electronics Cards Grid */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {electronics.map((electronics) => (
              <Link
                key={electronics.id}
                to={`electronics/${electronics.id}`} // Link to detail page
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col justify-between p-3 h-full"
              >
                <div className="relative">
                  <img
                    src={electronics.img}
                    alt={electronics.name}
                    className="rounded-lg m-6 h-48 object-cover"
                  />
                  {/* Add to Cart Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault(); // Prevent link navigation
                      addToCart(electronics); // Call Zustand action
                    }}
                    className="absolute right-3 bg-[#f8f1e8] text-[#d4492b] rounded-lg py-2 text-sm font-semibold hover:bg-[#f3e3d6]"
                  >
                    <CiShoppingCart className="inline w-10 h-5" />
                  </button>
                </div>
                <div>
                  <h2 className="text-base font-medium leading-tight mb-1">
                    {electronics.name}
                  </h2>
                  <p className="text-sm text-gray-500 mb-1">{electronics.type}</p>
                  <p className="text-[#d4492b] font-semibold text-sm">
                    Rs {electronics.price}
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