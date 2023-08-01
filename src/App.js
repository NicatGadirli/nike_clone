import { Route, Routes } from "react-router-dom";
import { useState } from "react";

// Components
import Header from "./components/Header";
import BottomHeader from "./components/BottomHeader";
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

const App = () => {
  const [isSearchOpen, setSearchOpen] = useState(true);

  const handleSearchToggle = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <>
      {isSearchOpen}
      <Header handleSearchToggle={handleSearchToggle} />
      <BottomHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/location" element={<Location />} />
        <Route path="/product-details/:productID" element={<ProductDetails />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;