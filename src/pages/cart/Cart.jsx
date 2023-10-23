import { useCart } from "../../context/cartContext";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import "./cart.css";

const Cart = () => {
  const {
    cartItems: cart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  } = useCart();
  const totalPrice = cart
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);
  return (
    <div className="cart">
      <div className="cart-title">Your Shopping Cart</div>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
        <OrderSummary totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default Cart;
