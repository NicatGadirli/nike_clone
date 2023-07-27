import { Route, Routes } from "react-router-dom";
import { useState } from "react";

// Components
import TopHeader from "./components/TopHeader";
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

const App = () => {
  const [isSearchOpen, setSearchOpen] = useState(true);

  const handleSearchToggle = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <>
      {isSearchOpen && <TopHeader />}
      <Header handleSearchToggle={handleSearchToggle} />
      <BottomHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;