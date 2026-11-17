import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./cartSlice";

const plants = {
  Indoor: [
    {
      id: 1,
      name: "Snake Plant",
      price: 25,
      image: "https://images.unsplash.com/photo-1593482892290-f54927ae2f5c"
    },
    {
      id: 2,
      name: "Peace Lily",
      price: 30,
      image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
    },
    {
      id: 3,
      name: "Monstera",
      price: 40,
      image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b"
    },
    {
      id: 4,
      name: "Pothos",
      price: 20,
      image: "https://images.unsplash.com/photo-1614594575042-9e4b8f5f2f8e"
    },
    {
      id: 5,
      name: "ZZ Plant",
      price: 35,
      image: "https://images.unsplash.com/photo-1632207691143-643e2e6d8d9f"
    },
    {
      id: 6,
      name: "Rubber Plant",
      price: 45,
      image: "https://images.unsplash.com/photo-1509423350716-97f2360afc87"
    }
  ],

  Outdoor: [
    {
      id: 7,
      name: "Rose",
      price: 15,
      image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322"
    },
    {
      id: 8,
      name: "Lavender",
      price: 18,
      image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec"
    },
    {
      id: 9,
      name: "Hibiscus",
      price: 22,
      image: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60"
    },
    {
      id: 10,
      name: "Jasmine",
      price: 20,
      image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651"
    },
    {
      id: 11,
      name: "Marigold",
      price: 12,
      image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f"
    },
    {
      id: 12,
      name: "Sunflower",
      price: 16,
      image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651"
    }
  ],

  Succulents: [
    {
      id: 13,
      name: "Aloe Vera",
      price: 18,
      image: "https://images.unsplash.com/photo-1509423350716-97f2360afc87"
    },
    {
      id: 14,
      name: "Echeveria",
      price: 15,
      image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc"
    },
    {
      id: 15,
      name: "Jade Plant",
      price: 25,
      image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
    },
    {
      id: 16,
      name: "Haworthia",
      price: 20,
      image: "https://images.unsplash.com/photo-1525490829609-d166ddb58678"
    },
    {
      id: 17,
      name: "Cactus",
      price: 14,
      image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc"
    },
    {
      id: 18,
      name: "String of Pearls",
      price: 28,
      image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85"
    }
  ]
};

function ProductList() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart?.items || []);

  const cartQuantity = cart.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  const isAdded = (plant) => {
    return cart.some((item) => item.id === plant.id);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Paradise Nursery</div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="#plants">Plants</a>
          <a href="#cart">
            🛒 Cart ({cartQuantity})
          </a>
        </div>
      </nav>

      {/* PAGE */}
      <div className="product-page" id="plants">

        <h1>Paradise Nursery Plants</h1>

        {Object.entries(plants).map(([category, categoryPlants]) => (
          <section key={category} className="category">

            <h2>{category}</h2>

            <div className="plant-grid">

              {categoryPlants.map((plant) => (
                <div className="plant-card" key={plant.id}>

                  <img
                    src={plant.image}
                    alt={plant.name}
                  />

                  <h3>{plant.name}</h3>

                  <p>${plant.price}</p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={isAdded(plant)}
                  >
                    {isAdded(plant) ? "Added to Cart" : "Add to Cart"}
                  </button>

                </div>
              ))}

            </div>

          </section>
        ))}

      </div>

    </div>
  );
}

export default ProductList;
