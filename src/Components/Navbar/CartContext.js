import { useState, React, createContext, useContext } from "react";


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

    } else {

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

  return (
    <CartContext.Provider
      value={{
        CartList,
        AddProduct,
        EmptyCart,
        DelProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;