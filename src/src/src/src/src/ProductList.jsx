import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

function ProductList() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items || []);

  const cartQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const plants = [
    {
      id: 1,
      name: "Snake Plant",
      price: 25,
      category: "Indoor",
      image:
        "https://images.unsplash.com/photo-1593482892290-f54927ae2f5c"
    },
    {
      id: 2,
      name: "Peace Lily",
      price: 30,
      category: "Indoor",
      image:
        "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
    },
    {
      id: 3,
      name: "Monstera",
      price: 40,
      category: "Indoor",
      image:
        "https://images.unsplash.com/photo-1614594975525-e45190c55d0b"
    },
    {
      id: 4,
      name: "Rose",
      price: 15,
      category: "Outdoor",
      image:
        "https://images.unsplash.com/photo-1496062031456-07b8f162a322"
    },
    {
      id: 5,
      name: "Lavender",
      price: 18,
      category: "Outdoor",
      image:
        "https://images.unsplash.com/photo-1499002238440-d264edd596ec"
    },
    {
      id: 6,
      name: "Sunflower",
      price: 20,
      category: "Outdoor",
      image:
        "https://images.unsplash.com/photo-1597848212624-a19eb35e2651"
    },
    {
      id: 7,
      name: "Aloe Vera",
      price: 18,
      category: "Succulents",
      image:
        "https://images.unsplash.com/photo-1509423350716-97f2360afc87"
    },
    {
      id: 8,
      name: "Jade Plant",
      price: 25,
      category: "Succulents",
      image:
        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
    },
    {
      id: 9,
      name: "Cactus",
      price: 14,
      category: "Succulents",
      image:
        "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc"
    }
  ];

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

      <h1>Our Plants</h1>

      {["Indoor", "Outdoor", "Succulents"].map((category) => (
        <section key={category}>
          <h2>{category} Plants</h2>

          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const added = cart.some(
                  (item) => item.id === plant.id
                );

                return (
                  <div className="plant-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                    />

                    <h3>{plant.name}</h3>

                    <p>${plant.price}</p>

                    <button
                      disabled={added}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {added ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
