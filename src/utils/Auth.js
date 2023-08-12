import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//Context
export const Auth = createContext();

export const Validation = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  //!Log In
  useEffect(() => {
    if (token) {
      let localToken = JSON.parse(localStorage.getItem("token"));
      if (localToken) {
        axios
          .post(process.env.REACT_APP_CHECK_LOGIN, {
            token: localToken,
          })
          .then((res) => {
            setUser(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [token]);
  //!Log In

  //!Log Out
  const logOut = () => {
    try {
      setUser({});
      setToken(false);
      localStorage.removeItem("token");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  //!Log Out

  //!Global States
  const globalStates = {
    user,
    setUser,
    token,
    setToken,
    logOut,
    email,
    setEmail,
  };
  //!Global States
  

  return <Auth.Provider value={globalStates}>{children}</Auth.Provider>;
};
