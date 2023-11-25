import products from "./productData.json";

const initial = {
  products,
  cart: [],
};
// fetch("https://fakestoreapi.com/products/1")
//   .then((res) => res.json())
//   .then((json) => console.log(json));
const reducer = (state = initial, action) => {
  if (action.type === "add_cart") {
    const item = state.products[action.payload];
    const checkItem = state.cart.some((e) => {
      if (e.id === item.id) {
        return true;
      }
    });
    if (checkItem) {
      const oldCart = state.cart;
      oldCart[action.payload].qty += 1;

      return { ...state, cart: oldCart };
    }
    return { ...state, cart: [...state.cart, { ...item, qty: 1 }] };
  }

  if (action.type === "delete_cart") {
    const oldCart = state.cart;
    oldCart.splice(action.payload, 1);
    return { ...state, cart: oldCart };
  }

  return state;
};

export default reducer;
