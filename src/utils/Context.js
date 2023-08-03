import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const Context = createContext();

export const MainContext = ({ children }) => {
  const [user, setUser] = useState([]);

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

  console.log(user);

  const globalStates = {
    user,
    setUser,
  };

  return <Context.Provider value={globalStates}>{children}</Context.Provider>;
};
