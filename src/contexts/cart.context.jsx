import { createContext, useEffect, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  // find if cardItems contains product to add

  const existingItem = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  );

  // if found increment quantity
  if (existingItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // if not add new array

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const removeOrder = (cartItems, productToRemove) =>
  cartItems.filter(cartItem => cartItem.id !== productToRemove.id);

export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  prices: 0,
  addItemToCart: () => {},
  removeItemToCart: () => {},
  removeOrderToOrders: () => {},
  setIsCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (acc, currItem) => acc + currItem.quantity,
      0
    );

    setCartCount(newCartCount);

    setPrices(
      cartItems.map(cartItem => {
        const { price, quantity } = cartItem;
        return { price, quantity };
      })
    );
  }, [cartItems]);

  useEffect(() => {}, [cartCount]);

  const addItemToCart = productToAdd => {
    setCartItem(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = productToRemove => {
    setCartItem(removeCartItem(cartItems, productToRemove));
  };

  const removeOrderToOrders = productToRemove => {
    setCartItem(removeOrder(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    cartItems,
    cartCount,
    prices,
    addItemToCart,
    setIsCartOpen,
    removeItemToCart,
    removeOrderToOrders,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
