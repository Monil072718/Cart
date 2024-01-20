const initial = {
   products : [
    { name: 'Shirt', price: 355, type: 'men', material: 'polyster', brand: 'nike', img: 'https://www.aristobrat.in/cdn/shop/products/CS_ClassicWhite_06_1080x.jpg?v=1614938700' },
    { name: 'Shirt', price: 475, type: 'women', material: 'cotton', brand: 'adidas', img: 'https://rukminim1.flixcart.com/image/850/1000/ktx9si80/top/a/q/k/m-sr-31-m-red-wakshi-original-imag763gejeh2gd6.jpeg?q=20' },
    { name: 'Shirt', price: 857, type: 'men', material: 'cotton', brand: 'us polo', img: 'https://5.imimg.com/data5/ZP/RG/VO/SELLER-14071010/unicolr-formal-green-shirt-500x500.jpeg' },
    { name: 'Shirt', price: 410, type: 'kids', material: 'polyster', brand: 'nike', img: 'https://m.media-amazon.com/images/I/31aMMFFnPrL.jpg' },
    { name: 'Shirt', price: 758, type: 'men', material: 'polyster', brand: 'nike', img: 'https://www.aristobrat.in/cdn/shop/products/CS_ClassicWhite_06_1080x.jpg?v=1614938700' },
    { name: 'Shirt', price: 895, type: 'women', material: 'cotton', brand: 'us polo', img: 'https://www.aristobrat.in/cdn/shop/products/CS_ClassicWhite_06_1080x.jpg?v=1614938700' },
    { name: 'Shirt', price: 899, type: 'men', material: 'cotton', brand: 'nike', img: 'https://www.aristobrat.in/cdn/shop/products/CS_ClassicWhite_06_1080x.jpg?v=1614938700' },
    { name: 'Shirt', price: 799, type: 'women', material: 'cotton', brand: 'us polo', img: 'https://cdn.shopify.com/s/files/1/0243/2799/files/SATIN_Crepe_satin_charmeuse_silk_Cherry_Red-womens-shirt-11_600x600.jpg?v=1607065346' },
    { name: 'Shirt', price: 699, type: 'men', material: 'polyster', brand: 'adidas', img: 'https://www.aristobrat.in/cdn/shop/products/CS_ClassicWhite_06_1080x.jpg?v=1614938700' },
    { name: 'Shirt', price: 599, type: 'kids', material: 'cotton', brand: 'us polo', img: 'https://images.meesho.com/images/products/236677921/earwv_512.webp' },
    { name: 'Shirt', price: 499, type: 'men', material: 'cotton', brand: 'adidas', img: 'https://www.aristobrat.in/cdn/shop/products/CS_ClassicWhite_06_1080x.jpg?v=1614938700' },
  ],
    cart: [],
    bag: 0,
    totalAmount: 0
}

const addCartReducer = (state = initial, action) => {
    const actions = {
      addcart: () => {
        if (!state.cart || state.cart.length === 0) {
          const newItem = { ...state.products[action.payload], qty: 1, subtotal: state.products[action.payload].price };
          return { ...state, cart: [newItem], bag: 1, totalAmount: newItem.subtotal };
        } else {
          const tempCart = [...state.cart];
          const checkCart = tempCart.some((e) => {
            if (e.name === state.products[action.payload].name) {
              e.qty++;
              e.subtotal = e.qty * e.price;
              return true;
            }
            return false;
          });
  
          if (!checkCart) {
            const newItem = { ...state.products[action.payload], qty: 1, subtotal: state.products[action.payload].price };
            return { ...state, cart: [...state.cart, newItem], bag: state.bag + 1, totalAmount: state.totalAmount + newItem.subtotal };
          } else {
            const Total = tempCart.reduce((total, item) => total + item.subtotal, 0);
            return { ...state, cart: tempCart, totalAmount: Total };
          }
        }
      },
      deletecart: () => {
        const deleteItemIndex = action.payload;
        const deleteItem = state.cart[deleteItemIndex];
  
        if (deleteItem) {
          const updatedTotalAmount = state.totalAmount - deleteItem.subtotal;
          const updatedCart = state.cart.filter((item, index) => index !== deleteItemIndex);
          return { ...state, cart: updatedCart, bag: state.bag - 1, totalAmount: updatedTotalAmount };
        }
        return state;
      },
      default: () => state,
    };
  
    const selectedAction = actions[action.type] || actions.default;
    return selectedAction();
  };
  

export default addCartReducer











