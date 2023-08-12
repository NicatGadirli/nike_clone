//Sections
import Hero from "./section/Hero";
import NikeVideo from "./section/NikeVideo";
import MixedNikePhotos from "./section/MixedNikePhotos";
import TrendProduct from "../components/TrendProduct";
import Explore from "./section/Explore";
import ForSport from "./section/ForSport";
import NikeMembership from "./section/NikeMembership";
import MerchMenu from "./section/MerchMenu";

//Location
import { useLocation } from "react-router-dom";



//ReactHooks
import { useEffect } from "react";

const Home = () => {

  //?/ Router
  const { pathname } = useLocation()


  //?Scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  //?Scroll



  return (
    <main>
      <Hero />
      <NikeVideo />
      <MixedNikePhotos />
      <TrendProduct />
      <Explore />
      <ForSport />
      <NikeMembership />
      <MerchMenu />
    </main>
  );
};

export default Home;
