"use client";
import { useEffect } from "react";
import { useCart } from "@/context/Context";
import Navbar from "../pages/Navbar";
import Link from "next/link";
// import { useRouter } from "next/navigation"; // Import useRouter

const CartPage = () => {
  const { cartItems, setCartItems, increaseQuantity, decreaseQuantity } =
    useCart();
  // const router = useRouter(); // Initialize useRouter

  // Load cart items from local storage when the component mounts
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, [setCartItems]);

  // Save cart items to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (productId: any) => {
    setCartItems(cartItems.filter((item) => item.product._id !== productId));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  // const handleProceedToCheckout = () => {
  //   if (cartItems.length === 0) {
  //     alert("Your cart is empty!");
  //     return;
  //   }

  //   router.push(`/checkout`);
  // };

  return (
    <>
      <Navbar />
      <nav className="md:px-9 xl:pl-16  text-sm flex justify-start gap-x-1 sm:px-10  text-gray-500 mb-6 px-10 py-6 md:py-8">
        <Link href="/">Home</Link> /{" "}
        <span className="text-black font-semibold">Your Cart</span>
      </nav>
      {cartItems.length === 0 ? (
        <div className="flex justify-center items-center pt-40 pb-16">
          <p>
            Your cart is empty{" "}
            <Link href="/" className="bg-gray-100 py-2 px-3 rounded-2xl">
              Select Products
            </Link>
          </p>
        </div>
      ) : (
        <div className="p-4 md:p-10 bg-gray-50 min-h-screen">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>
          <div className="">
            {cartItems.map((item) => (
              <div
                key={item.product._id}
                className="flex justify-between items-center border-b py-4"
              >
                <div className="flex items-start sm:items-center flex-col gap-2 sm:flex-row">
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.title}
                    width={50}
                    height={50}
                    className="rounded ml-5 sm:ml-0"
                  />
                  <span className="ml-4">{item.product.title}</span>
                </div>
                <div className="flex items-center flex-col-reverse sm:flex-row gap-5 sm:gap-x-16">
                  <div className="flex items-center ">
                    <button
                      onClick={() => decreaseQuantity(item.product._id)}
                      className="px-2 py-1 border border-gray-300 rounded-full "
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.product._id)}
                      className="px-2 py-1 border border-gray-300 rounded-full "
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold">
                      ${item.product.price * item.quantity}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.product._id)}
                      className="px-4 py-2 text-sm bg-[#01B5DA] text-white rounded-md hover:bg-[#1F2937]"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6 border-t pt-6">
            <span className="text-xl font-bold">Subtotal</span>
            <span className="text-xl font-semibold">
              ${calculateSubtotal()}
            </span>
          </div>


          <div className="mt-8 flex justify-between items-center space-x-4">
            <Link href="/checkout"
            
              className="w-full text-sm sm:text-base sm:w-auto sm:px-6 py-2 sm:py-3 bg-[#01B5DA] text-white rounded-md hover:bg-[#1F2937]"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
