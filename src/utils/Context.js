import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const Context = createContext();

export const MainContext = ({ children }) => {
  const [user, setUser] = useState([]);
  const [cart, setCart] = useState([]);

  //Add To Cartl
  const addToCart = (product) => {
    let excitingProduct = cart.find((item) => item.id === product.id);
    if (excitingProduct) {
      let upgradedCart = cart.map((item) => {
        if (excitingProduct.id === item.id) {
          return { ...item, quantify: item.quantify + 1 };
        } else {
          return item;
        }
      });
      setCart(upgradedCart);
    } else {
      setCart([...cart, { ...product, quantify: 1 }]);
    }
  };

  //Remove Cart from Cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart)
  };

  useEffect(() => {
    const checkUser = async () => {
      await axios
        .post(process.env.REACT_APP_CHECK_LOGIN, {
          token: JSON.parse(localStorage.getItem("token")),
        })
        .then((res) => {
          if (res.status === 200) {
            setUser(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }, []);

  const globalStates = {
    cart,
    user,
    setUser,
    addToCart,
    removeFromCart,
  };

  return <Context.Provider value={globalStates}>{children}</Context.Provider>;
};
