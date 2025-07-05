// PaymentPopup.jsx

const PaymentPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
        <ul className="space-y-2 mb-4">
          <li><button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Credit Card</button></li>
          <li><button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">eSewa</button></li>
          <li><button className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600">Khalti</button></li>
          <li><button className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600">Cash on Delivery</button></li>
        </ul>
        <button
          onClick={onClose}
          className="mt-2 text-sm text-gray-600 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PaymentPopup;
