// Components
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import BottomHeader from "./components/BottomHeader";

// Router
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <BottomHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
