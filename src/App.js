import { Route, Routes } from "react-router-dom";
import { useState } from "react";

// Components
import Header from "./components/Header";
import ExperienceWrapper from "./components/ExperienceWrapper";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Location from "./pages/Location";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Favorite from "./pages/Favorite";
import Profile from "./pages/Profile";

//Context
import { MainContext } from "./utils/Context";

const App = () => {
  const [isSearchOpen, setSearchOpen] = useState(true);

  const handleSearchToggle = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <MainContext>
      {isSearchOpen}
      <Header handleSearchToggle={handleSearchToggle} />
      <ExperienceWrapper />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/location" element={<Location />} />
        <Route
          path="/product-details/:productID"
          element={<ProductDetails />}
        />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </MainContext>
  );
};

export default App;
