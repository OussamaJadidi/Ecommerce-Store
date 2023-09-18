import product from "@/sanity_ecommerce/schemas/product";
import { createContext, useContext, useState, useEffect } from "react";

import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundPorduct;
  let index;

  function onAdd(product, quantity) {
    const checkProductInCart = cartItems.find(
      (item) => item._id == product._id
    );

    setTotalPrice((prev) => prev + product.price * quantity);
    setTotalQuantities((prev) => prev + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the Cart`);
  }

  function onRemove(product){
    foundPorduct = cartItems.find((item) => item._id === product._id);
    let newCartItems = cartItems.filter(item=> item._id !== product._id)

    setTotalPrice(prev => prev - (foundPorduct.price * foundPorduct.quantity));
    setTotalQuantities(prev => prev - foundPorduct.quantity)
    setCartItems(newCartItems)
  }

  function toggleCartItemQuantity(id, value) {
    foundPorduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    let newCartItems = cartItems.filter(item=> item._id !== id)

    if (value === "inc") {
      setCartItems([
        ...newCartItems,
        { ...foundPorduct, quantity: foundPorduct.quantity + 1 }
      ]);
      setTotalPrice(prev => prev + foundPorduct.price);
      setTotalQuantities((prev) => prev + 1);
    } else if (value == "dec") {
      if (foundPorduct.quantity > 1) {
      
        setCartItems([
            ...newCartItems,
            { ...foundPorduct, quantity: foundPorduct.quantity - 1 }
          ]);
        setTotalPrice(prev => prev - foundPorduct.price);
        setTotalQuantities((prev) => prev - 1);
      }
    }
  }

  function incQty() {
    setQty((prev) => prev + 1);
  }
  function decQty() {
    setQty((prev) => {
      if (prev - 1 < 1) return 1;
      return prev - 1;
    });
  }

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        showCart,
        setShowCart,
        toggleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
