```jsx
import React from "react";

const CartItem = ({ item, onRemove, onIncrease, onDecrease }) => {
  const quantity = item.quantity || 1;
  const price = Number(item.price) || 0;

  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.name}
        className="cart-item-image"
      />

      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Price: ${price.toFixed(2)}</p>

        <div className="quantity-controls">
          <button onClick={() => onDecrease(item.name)}>-</button>

          <span>{quantity}</span>

          <button onClick={() => onIncrease(item.name)}>+</button>
        </div>

        <p className="subtotal">
          Subtotal: ${(price * quantity).toFixed(2)}
        </p>

        <button
          className="remove-button"
          onClick={() => onRemove(item.name)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

const Cart = ({ cartItems = [], onRemove, onIncrease, onDecrease }) => {
  const total = cartItems.reduce(
    (sum, item) =>
      sum + (Number(item.price) || 0) * (item.quantity || 1),
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-list">
        {cartItems.map((item) => (
          <CartItem
            key={item.name}
            item={item}
            onRemove={onRemove}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        ))}
      </div>

      <div className="cart-summary">
        <h2>Cart Total</h2>
        <p>Total Items: {cartItems.reduce(
          (sum, item) => sum + (item.quantity || 1),
          0
        )}</p>

        <h3>Total: ${total.toFixed(2)}</h3>

        <button className="checkout-button">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
```
