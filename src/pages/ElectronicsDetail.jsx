import { useParams } from "react-router";
import { electronics } from "../Data/Data";
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { useCart } from "../store/cartStore";
import { Link } from "react-router";


const ElectronicsDetail = () => {
  const addToCart = useCart((state) => state.addToCart);

  const { id } = useParams();
  const Details = electronics.find((product) => product.id === parseInt(id));

  if (!Details) {
    return (
      <div className="text-center text-red-500 mt-10">Product not found</div>
    );
  }

  return (
    <div className="max-w-2xl h-screen mx-auto py-8 grid place-items-center grid-cols-1 md:grid-cols-2 gap-10 mt-10">
      {/* Image Section */}
      <div>
        <img
          src={Details.img}
          alt={Details.name}
          className="w-52 h-auto object-contain rounded-lg shadow-md mb-4"
        />
      </div>

      {/* Details Section */}
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold">{Details.name}</h1>

        <p className="text-gray-600">{Details.type}</p>
        <p>{Details.description}</p>
        <h1>Released Date: {Details.releaseDate} </h1>

        <div className="text-2xl font-semibold text-navbar">
          Rs {Details.price}
        </div>

        <div className="flex gap-4 mt-4">
          <Link to="/checkout">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Buy Now
            </button>
          </Link>

          <button
            onClick={() => addToCart(Details)}
            className="px-4 py-2 bg-navbar text-white rounded-lg hover:bg-red-800"
          >
            Add to Cart
          </button>
        </div>

        <div className="flex gap-6 mt-4 text-gray-600">
          <button className="flex items-center gap-1 hover:text-gray-800">
            <FaRegHeart className="w-5 h-5" />
            <span>Share</span>
          </button>
          <button className="flex items-center gap-1 hover:text-gray-800">
            <FaShare className="w-5 h-5" />
            <span>Wishlist</span>
          </button>
        </div>

        <div className="border-t pt-4 mt-6 text-sm text-gray-700">
          <p>
            <span className="font-medium">Delivery:</span> Standard Delivery in
            3-5 days
          </p>
          <p>
            <span className="font-medium">Return:</span> 14 Days Free Return
          </p>
        </div>
      </div>
    </div>
  );
};

export default ElectronicsDetail;
