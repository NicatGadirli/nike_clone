import { createContext, useState } from "react";

//UseEffect
import { useEffect } from "react";

//SweetAlert
import Swal from "sweetalert2";

//Context
export const Context = createContext();

export const MainContext = ({ children }) => {
  //* const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartSum, setCartSum] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    //!Calc Quantity
    const calcQuantity = () => {
      const totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
      if (totalQuantity > 9) {
        setCartSum("9+");
      } else {
        setCartSum(totalQuantity);
      }
    };
    calcQuantity();
    //!Calc Quantity

    //!Calculate Total Price
    const sumPrice = () => {
      if (cart.length === 0) {
        setTotalPrice(0);
        return;
      }
      let productPrices = cart.map(
        (item) => item.quantity * parseFloat(item.price));
      let sum = productPrices.reduce((acc, curr) => acc + curr, 0);
      setTotalPrice(sum);
    };
    sumPrice();
  }, [cart]);
    //!Calculate Total Price


  //!Add To Cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      if (existingProduct.quantity < 10) {
        setCart(
          cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        Swal.fire(
          "Hata",
          "Üzgünüz, maksimum miktara ulaştın. Lütfen bir ürünü kaldır ve tekrar dene."
        );
      }
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  //!Add To Cart


  //!Remove Cart from Cart
  const removeFromCart = (id) => {
    Swal.fire({
      title: "Ürünü kaldırmak istediğinizden emin misiniz??",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Sil",
      denyButtonText: `Silme`,
      cancelButtonText: "Vazgeç",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        Swal.fire("Silindi!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Silinemedi", "", "warning");
      }
    });
  };
  //!Remove Cart from Cart

  //!Save Cart
  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart"));
    if (localCart !== null) {
      setCart(localCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  //!Save Cart


  //!Add to Favorites
  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]);
    updateLocalStorage([...favorites, product]);
  };
  //!Add to Favorites

  
  //!Remove from Favorites
  const removeFromFavorites = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== productId)
    );
    const updatedFavorites = favorites.filter((item) => item.id !== productId);
    updateLocalStorage(updatedFavorites);
  };
  //!Remove from Favorites


  //! Save in Local Storage
  const updateLocalStorage = (updatedFavorites) => {
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    const localFavorites = JSON.parse(localStorage.getItem("favorites"));

    if (localFavorites !== null) {
      setFavorites(localFavorites);
    }
  }, []);

  //! Save in Local Storage


  //!Change Quantity
  const changeQuantity = (product, number) => {
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
  //!Change Quantity


  //!Calculate Total Price
  const sumPrice = () => {
    if (cart.length === 0) {
      setTotalPrice(0);
      return;
    }
    let productPrices = cart.map(
      (item) => item.quantity * parseFloat(item.price));
    let sum = productPrices.reduce((acc, curr) => acc + curr, 0);
    setTotalPrice(sum);
  };
  //!Calculate Total Price


  //!Global States
  const globalStates = {
    //?States
    cart,
    cartSum,
    setCartSum,
    totalPrice,
    setTotalPrice,
    sumPrice,

    //?Functions
    addToCart,
    removeFromCart,
    changeQuantity,
    favorites,
    setFavorites,
    addToFavorites,
    removeFromFavorites,
  };

  return <Context.Provider value={globalStates}>{children}</Context.Provider>;
};
