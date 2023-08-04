import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const Context = createContext();

export const MainContext = ({ children }) => {
  const [user, setUser] = useState([]);
  const [cart, setCart] = useState([]);

  //Add to Cart
  const addToCart = (newProduct) => {
    setCart([...cart, newProduct]);
    console.log(newProduct);
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
    user,
    setUser,
    addToCart,
  };

  return <Context.Provider value={globalStates}>{children}</Context.Provider>;
};
