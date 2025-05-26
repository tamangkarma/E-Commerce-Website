import { create } from "zustand";

// Create Zustand store
export const useCart = create((set) => ({
  cartItem: [], // Array to store items in cart
  cartCount: 0, // Total quantity of items in cart

  // Add item to cart
  addToCart: (item) =>
    set((state) => {
      const index = state.cartItem.findIndex((i) => i.id === item.id);
      let updatedCart;

      if (index !== -1) {
        // If item already exists, increase quantity
        updatedCart = [...state.cartItem];
        updatedCart[index].quantity += 1;
      } else {
        // If item is new, add with quantity 1
        updatedCart = [...state.cartItem, { ...item, quantity: 1 }];
      }

      return {
        cartItem: updatedCart,
        cartCount: updatedCart.reduce((acc, curr) => acc + curr.quantity, 0),
      };
    }),

  // Remove item completely from cart
  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cartItem.filter((item) => item.id !== id);
      return {
        cartItem: updatedCart,
        cartCount: updatedCart.reduce((acc, curr) => acc + curr.quantity, 0),
      };
    }),

  // Increase quantity of a specific item
  increaseQuantity: (id) =>
    set((state) => {
      const updatedCart = state.cartItem.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return {
        cartItem: updatedCart,
        cartCount: updatedCart.reduce((acc, curr) => acc + curr.quantity, 0),
      };
    }),

  // Decrease quantity of a specific item
  decreaseQuantity: (id) =>
    set((state) => {
      const updatedCart = state.cartItem
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0); // Remove item if quantity reaches 0

      return {
        cartItem: updatedCart,
        cartCount: updatedCart.reduce((acc, curr) => acc + curr.quantity, 0),
      };
    }),

    

  // Clear all items in cart
  clearCart: () => set({ cartItem: [], cartCount: 0 }),
}));
