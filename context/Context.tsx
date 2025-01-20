"use client";
import React, { createContext, useState, useEffect, ReactNode, useContext } from "react";

// Type for product data
interface ICartType {
  _id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  imageUrl: string;
}

// Type for cart items with quantity
interface CartItem {
  product: ICartType;
  quantity: number;
}

// Cart context interface definition
interface CartContextProps {
  cartItems: CartItem[]; // Array of cart items
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>; // Function to set cart items state
  addToCart: (product: ICartType) => void; // Function to add product to cart
  removeFromCart: (productId: string) => void; // Function to remove product from cart
  increaseQuantity: (productId: string) => void; // Function to increase product quantity in cart
  decreaseQuantity: (productId: string) => void; // Function to decrease product quantity in cart
  addToWishlist: (product: ICartType) => void; // Function to add product to wishlist
  wishlist: ICartType[]; // List of items in wishlist
  setWishlist: React.Dispatch<React.SetStateAction<ICartType[]>>;
}

// CartContext creation with types
const CartContext = createContext<CartContextProps | undefined>(undefined);

// CartProvider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  // State for cart items and wishlist
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<ICartType[]>([]);

  // Function to add product to wishlist
  const addToWishlist = (product: ICartType) => {
    const exists = wishlist.find((item) => item._id === product._id);
    if (exists) {
      alert("Product is already in your wishlist.");
    } else {
      setWishlist([...wishlist, product]);
      alert("Product added to your wishlist.");
    }
  };

  // Function to add product to cart
  const addToCart = (product: ICartType) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product._id === product._id
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.product._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  // Function to remove product from cart
  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product._id !== productId)
    );
  };

  // Function to increase product quantity in cart
  const increaseQuantity = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product._id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Function to decrease product quantity in cart
  const decreaseQuantity = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product._id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        setWishlist,
        addToWishlist,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        wishlist, // Provide wishlist state
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook to use Cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
