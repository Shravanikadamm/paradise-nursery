import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity
} from "./CartSlice";

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items || []);

  const cartQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div>
          <Link to="/">Home</Link>{" | "}
          <Link to="/plants">Plants</Link>{" | "}
          <Link to="/cart">
            🛒 Cart ({cartQuantity})
          </Link>
        </div>
      </nav>

      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              width="100"
            />

            <h3>{item.name}</h3>

            <p>${item.price}</p>

            <button
              onClick={() =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: item.quantity - 1
                  })
                )
              }
            >
              -
            </button>

            <span> {item.quantity} </span>

            <button
              onClick={() =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: item.quantity + 1
                  })
                )
              }
            >
              +
            </button>

            <button
              onClick={() => dispatch(removeItem(item.id))}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
