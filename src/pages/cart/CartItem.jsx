const CartItem = ({
  item,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
}) => {
  const { image, title, author, price, quantity, id } = item;

  return (
    <div className="cart-item">
      <img src={`/books/${image}`} alt={title} className="cart-item-img" />
      <div className="cart-item-info">
        <div>
          <div className="cart-item-book-title">
            <b>Title: </b> {title}
          </div>
          <div className="cart-item-author">
            <b>Author: </b> {author}
          </div>
        </div>
        <div>
          <div className="cart-item-quantity">
            <button
              onClick={() =>
                incrementQuantity({ ...item, quantity: item.quantity + 1 })
              }
            >
              <i className="bi bi-plus-lg"></i>
            </button>
            <b>{quantity}</b>
            <button
              onClick={() =>
                decrementQuantity({ ...item, quantity: item.quantity - 1 })
              }
            >
              <i className="bi bi-dash-lg"></i>
            </button>
          </div>
          <div className="cart-items-price">
            ${(price * quantity).toFixed(2)}
          </div>
          <i
            onClick={() => removeFromCart(id)}
            className="bi bi-trash-fill"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
