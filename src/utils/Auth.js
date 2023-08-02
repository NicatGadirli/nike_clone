import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Auth = createContext();

export const AuthContext = ({ children }) => {
  const [token, setToken] = useState(true);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  //Check user is in
  useEffect(() => {
    checkUserIsIn();
  }, [navigate]);

  const checkUserIsIn = async () => {
    try {
      let user = await JSON.parse(localStorage.getItem("token"));
      setToken(user);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    try {
      localStorage.setItem("token", JSON.stringify(false));
      setToken(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (userData.email !== "" && userData.password !== "") {
      alert("qeydiyyatdan kecdiniz");
      localStorage.setItem("token", JSON.stringify(true));
      navigate("/");
    } else {
        
    }
  };

  const globalStates = {
    token,
    setToken,
  };

  return <Auth.Provider value={globalStates}>{children}</Auth.Provider>;
};
