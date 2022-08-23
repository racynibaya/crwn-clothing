import { createContext, useState } from 'react';

export const CartItemsContext = createContext({
  items: [],
  setItems: () => null,
});

export const CartItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const value = { items, setItems };
  return (
    <CartItemsContext.Provider value={value}>
      {children}
    </CartItemsContext.Provider>
  );
};
