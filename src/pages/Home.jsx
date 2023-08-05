//Sections
import Hero from "./section/Hero";
import NikeVideo from "./section/NikeVideo";
import MixedNikePhotos from "./section/MixedNikePhotos";
import TrendProduct from "../components/TrendProduct";
import Explore from "./section/Explore";
import ForSport from "./section/ForSport";
import AppInfo from "./section/AppInfo";
import NikeMembership from "./section/NikeMembership";
import MerchMenu from "./section/MerchMenu";

//Location
import { useLocation } from "react-router-dom";

//ReactHooks
import { useContext, useEffect } from "react";
import axios from "axios";
// import { Context } from "../utils/Context";

const Home = () => {
  // const { user, setUser } = useContext(Context)



  //Router
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  return (
    <main>
      <Hero />
      <NikeVideo />
      <MixedNikePhotos />
      <TrendProduct />
      <Explore />
      <ForSport />
      <AppInfo />
      <NikeMembership />
      <MerchMenu />
    </main>
  );
};

export default Home;
