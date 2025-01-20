"use client";
import { useCart } from '@/context/Context';
import Navbar from '../pages/Navbar';

const CartPage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  // if (cartItems.length === 0) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <p>Your cart is empty.</p>
  //     </div>
  //   );
  // }

  return (
    <>
      <Navbar />
      <div className="p-4 md:p-10 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>
        <div className="">
          {cartItems.map((item) => (
            <div key={item.product._id} className="flex justify-between items-center border-b py-4">
              <div className="flex items-center">
                <img
                  src={item.product.imageUrl}
                  alt={item.product.title}
                  width={50}
                  height={50}
                  className="rounded"
                />
                <span className="ml-4">{item.product.title}</span>
              </div>
              <div className="flex items-center gap-x-7">
                <div className='flex items-center '>
                  <button
                    onClick={() => decreaseQuantity(item.product._id)}
                    className="px-2 py-1 border border-gray-300 rounded-full mr-2"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.product._id)}
                    className="px-2 py-1 border border-gray-300 rounded-full ml-2"
                  >
                    +
                  </button>
                </div>
                <span className="font-semibold">${item.product.price * item.quantity}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Subtotal Section */}
        <div className="flex justify-between items-center mt-6 border-t pt-6">
          <span className="text-xl font-bold">Subtotal</span>
          <span className="text-xl font-semibold">${calculateSubtotal()}</span>
        </div>

        {/* Mobile responsive style */}
        <div className="mt-8 flex justify-between items-center space-x-4">
          <button className="w-full sm:w-auto px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600">
            Proceed to Checkout
          </button>
          <button className="w-full sm:w-auto px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-100">
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
