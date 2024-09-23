import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedItems = sessionStorage.getItem('cartItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const [counts, setCounts] = useState(() => {
    const savedCounts = sessionStorage.getItem('counts');
    return savedCounts ? JSON.parse(savedCounts) : {};
  });

  useEffect(() => {
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    sessionStorage.setItem('counts', JSON.stringify(counts));
  }, [counts]);

  const increment = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 1) + 1,
    }));
  };

  const decrement = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 1) > 1 ? prevCounts[id] - 1 : 1,
    }));
  };

  const addToCart = (item) => {
    if (!cartItems.find(cartItem => cartItem.id === item.id)) {
      setCartItems(prevItems => [...prevItems, item]);
    }
    setCounts((prevCounts) => ({
      ...prevCounts,
      [item.id]: 1,
    }));
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    setCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      delete newCounts[id];
      return newCounts;
    });
  };

  const getCartItemCount = () => {
    return cartItems.length;
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, getCartItemCount, decrement, increment, removeFromCart, counts}}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
