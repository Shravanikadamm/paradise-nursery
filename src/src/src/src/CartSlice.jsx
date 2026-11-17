const initialState = {
  items: [],
};

export const addItem = (state, action) => {
  const item = action.payload;

  const existingItem = state.items.find(
    (product) => product.id === item.id
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.items.push({
      ...item,
      quantity: 1,
    });
  }
};

export const removeItem = (state, action) => {
  state.items = state.items.filter(
    (item) => item.id !== action.payload
  );
};

export const updateQuantity = (state, action) => {
  const { id, quantity } = action.payload;

  const item = state.items.find(
    (product) => product.id === id
  );

  if (item) {
    item.quantity = quantity;
  }
};

export default initialState;
