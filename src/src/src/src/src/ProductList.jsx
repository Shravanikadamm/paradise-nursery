import React from "react";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 15,
    description: "A low-maintenance indoor plant.",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 20,
    description: "A beautiful and easy-to-care-for plant.",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 25,
    description: "An elegant plant perfect for indoor spaces.",
  },
  {
    id: 4,
    name: "Money Plant",
    price: 18,
    description: "A popular decorative indoor plant.",
  },
];

function ProductList() {
  return (
    <div>
      <h1>Our Plants</h1>

      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>

            <p>{product.description}</p>

            <p>
              Price: ${product.price}
            </p>

            <button>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
