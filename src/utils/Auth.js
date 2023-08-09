import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Auth = createContext();

export const Validation = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(false);
  const navigate = useNavigate();

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

  const globalStates = {
    user,
    setUser,
    token,
    setToken,
    logOut,
  };
  return <Auth.Provider value={globalStates}>{children}</Auth.Provider>;
};
