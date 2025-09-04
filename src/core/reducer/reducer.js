export const initialState = {
  cartItems: [],
};
export const ShoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AddProductToCart":
      const product = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        // Increment quantity
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // Add new item with quantity = 1
        return {
          ...state,
          cartItems: [...state.cartItems, { ...product, quantity: 1 }],
        };
      }

    default:
      return state;
  }
};
