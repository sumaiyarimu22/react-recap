//use localStore to manage cart data
const addTodb = (id) => {
  let shoppingCart = {};
  const quantity = localStorage.getItem("shopping-cart", shoppingCart);

  if (quantity) {
    const newQuantity = parseInt(quantity) + 1;
    localStorage.setItem(id, newQuantity);
  } else {
    localStorage.setItem(id, 1);
  }
};
export { addTodb };
