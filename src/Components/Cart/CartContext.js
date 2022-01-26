import { useState, React, createContext, useContext } from 'react';


export const CartContext = createContext([]);
export const UseCartContext = () => useContext(CartContext);
const CartContextProvider = ({ children }) => {
  const [CartList, SetCartList] = useState([]);
  const AddProduct = (product, quantity) => {
    const index = CartList.findIndex((i) => i.product.id === product.id);
    if (index > -1) {
      const oldQy = CartList[index].quantity;
      CartList.splice(index, 1);
      SetCartList([...CartList, { product, quantity: quantity + oldQy }]);
    } 
    else {
      SetCartList([...CartList, { product, quantity }]);
    }
  };
  const DelProduct = (id) => {
    const products = CartList.filter((i) => i.product.id !== id);
    SetCartList(products);
  };
  const EmptyCart = () => {
    SetCartList([]);
  };

  const IconCart = () => {
    return CartList.reduce((acum, i)=> acum + i.quantity, 0);
  }

  const PriceTotal = () => {
    return CartList.reduce((acum, i)=> acum + i.quantity * i.product.price, 0);
  }

  return (
    <CartContext.Provider value={{ CartList, AddProduct, EmptyCart, DelProduct, IconCart, PriceTotal}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;