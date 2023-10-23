import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add To Cart
  const addToCart = (item) => {
    if (cartItems.find((it) => it.id === item.id)) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: Number(cartItem.quantity) + Number(item.quantity),
              }
            : cartItem
        )
      );
    } else {
      setCartItems((prev) => [...prev, item]);
    }
  };

  // Remove From Cart
  const removeFromCart = (id) => {
    const cart = cartItems.filter((item) => item.id !== id);
    setCartItems(cart);
  };

  // Increment
  const incrementQuantity = (item) => {
    setCartItems(
      cartItems.map((cartItem) => (cartItem.id === item.id ? item : cartItem))
    );
  };

  // Decrement
  const decrementQuantity = (item) => {
    if (item.quantity === 0) {
      removeFromCart(item.id);
    } else {
      setCartItems(
        cartItems.map((cartItem) => (cartItem.id === item.id ? item : cartItem))
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        cartItemsLength: cartItems.length,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext was used outside of the CartProvider");
  return context;
}

export { CartProvider, useCart };
