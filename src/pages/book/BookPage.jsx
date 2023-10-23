import { useParams } from "react-router-dom";
import { books } from "../../data/books";
import Rating from "../../components/book-slider/Rating";
import "./book.css";
import { useCart } from "../../context/cartContext";
import { useState } from "react";

const BookPage = () => {
  const { addToCart } = useCart();

  const [qty, setQty] = useState(1);

  const { id } = useParams();
  const book = books.find((book) => book.id === Number(id));
  return (
    <div className="book">
      <div className="book-content">
        <img
          src={`/books/${book.image}`}
          alt={book.title}
          className="book-content-img"
        />
        <div className="book-content-info">
          <h1 className="book-title">{book.title}</h1>
          <div className="book-author">
            by <span>{book.author}</span> (Author)
          </div>
          <Rating rating={book.rating} reviews={book.reviews} />
          <div className="book-add-to-cart">
            <input
              min="1"
              max="100"
              type="number"
              className="book-add-to-cart-input"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
            <button
              onClick={() => addToCart({ ...book, quantity: qty })}
              className="book-add-to-cart-btn"
            >
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <p className="book-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        obcaecati, omnis qui unde amet quas ex quaerat delectus nostrum
        asperiores blanditiis? Distinctio minus deserunt iusto. Enim cum dolore
        perferendis fugit! Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Architecto sit dolorum quae itaque voluptatem temporibus dolorem
        voluptatibus provident possimus nihil velit obcaecati excepturi, commodi
        laudantium sint cumque ex aliquid sequi!
      </p>
      <div className="book-icons">
        <div className="book-icon">
          <small>Print Length</small>
          <i className="bi bi-file-earmark-break"></i>
          <b>{book.printLength}pages</b>
        </div>
        <div className="book-icon">
          <small>Language</small>
          <i className="bi bi-globe"></i>
          <b>{book.language}</b>
        </div>
        <div className="book-icon">
          <small>Publication date</small>
          <i className="bi bi-calendar3"></i>
          <b>{book.PublicationDate}</b>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
