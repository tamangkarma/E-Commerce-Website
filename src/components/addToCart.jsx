import { Link, Navigate } from "react-router";
import { useCart } from "../store/cartStore";

const AddToCart = () => {
  const cart = useCart((state) => state.cartItem);
  const removeFromCart = useCart((state) => state.removeFromCart);
  const increaseQuantity = useCart((state) => state.increaseQuantity);
  const decreaseQuantity = useCart((state) => state.decreaseQuantity);

  console.log("cart Items:", cart);

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => {
    const price = Number(item.price);
    if (isNaN(price)) {
      console.log(`Invalid price for item ${item.name}: ${item.price}`);
      return acc;
    }
    return acc + price * item.quantity;
  }, 0);

  if (!cart.length) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-600">Your cart is empty.</p>
        <Link to={"/"}>
          <button className="mt-4 px-4 py-2 bg-navbar text-white rounded hover:bg-orange-600">
            Go Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="mt-20 h-screen">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-xl font-bold text-[#d4492b] mb-3 text-center">
            {/* Show total quantity of all items */}
            Your Cart ({totalQuantity})
          </h2>

          {/* Empty cart message */}
          {cart.length === 0 ? (
            <div className="text-center">
              <img
                src="/src/assets/illustration-empty-cart.svg"
                alt="Empty Cart"
                className="w-20 h-20 mx-auto"
              />
              <p className="text-gray-400 mt-2 text-sm">
                Your added items will appear here
              </p>
            </div>
          ) : (
            // List cart items
            <ul className="space-y-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-4 bg-[#fafafa] p-3 rounded-md"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-gray-500 text-xs">
                      Price: Rs. {Number(item.price).toFixed(2)}
                    </p>
                    <p className="text-gray-600 text-xs">
                      Subtotal: Rs.{" "}
                      {(item.quantity * Number(item.price)).toFixed(2)}
                    </p>
                    {/* Quantity Buttons */}
                    <div className="flex items-center space-x-2 mt-1">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-2 py-0.5 bg-gray-300 rounded text-sm hover:bg-gray-400"
                      >
                        -
                      </button>
                      <span className="text-sm">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="px-2 py-0.5 bg-gray-300 rounded text-sm hover:bg-gray-400"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {/* Remove Item */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* Total Price */}
          <div className="mt-6 border-t pt-4 text-right">
            <p className="text-base font-semibold">
              Total: {/* Show total price of all items */}
              <span className="text-[#d4492b]">
                Rs. {totalPrice.toLocaleString("en-IN")}
              </span>
            </p>
            <div className=" text-right  justify-between items-center">
              <p className="text-base font-semibold">
                Total Items:{" "}
                <span className="text-[#d4492b]">{totalQuantity}</span>
              </p>
              {/* Proceed to Checkout Button */}

              <Link to="/checkout">
                <button
                  disabled={cart.length === 0}
                  className="px-4 py-2 mt-2 bg-navbar text-white rounded-lg hover:bg-red-600 transition"
                >
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
