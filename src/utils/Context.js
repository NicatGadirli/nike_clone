import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/* ------------------------------- SweetAlert ------------------------------- */
import Swal from "sweetalert2";

export const Context = createContext();

export const MainContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartSum, setCartSum] = useState(0);

  //Navigate
  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    calcQuantity();
  }, [cart]);

  //Add To Cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };


  //Remove Cart from Cart
  const removeFromCart = (id) => {
    Swal.fire({
      title: 'Ürünü kaldırmak istediğinizden emin misiniz??',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Sil',
      denyButtonText: `Silme`,
      cancelButtonText: 'Vazgeç',
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        Swal.fire('Silindi!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Silinemedi', '', 'warning');
      }
    });
  };

  //Cart Quantity
  const calcQuantity = () => {
    const totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    if (totalQuantity > 9) {
      setCartSum("9+");
    } else {
      setCartSum(totalQuantity);
    }
  };

  const getUserData = async () => {
    let localToken = await JSON.parse(localStorage.getItem("token"));
    if (localToken) {
      axios
        .post(process.env.REACT_APP_CHECK_LOGIN, localToken)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //Log Out
  const logOut = () => {
    try {
      setUser({});
      localStorage.removeItem("token");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  //Change Quantity
  const changeQuantity = (product,number) => {
    if (product) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: number };
        } else {
          return item;
        }
      });
      setCart(updatedCart);
    }
  };


  const globalStates = {
    //States
    cart,
    user,
    setUser,
    logOut,
    cartSum,
    setCartSum,

    //Functions
    addToCart,
    removeFromCart,
    changeQuantity,
  };

  return <Context.Provider value={globalStates}>{children}</Context.Provider>;
};
