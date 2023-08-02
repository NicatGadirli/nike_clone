//Sections
import Hero from "./Hero";
import NikeVideo from "./NikeVideo";
import MixedNikePhotos from "./MixedNikePhotos";
import TrendProduct from "../components/TrendProduct";
import Explore from "./Explore";
import ForSport from "./ForSport";
import AppInfo from "./AppInfo";
import NikeMembership from "./NikeMembership";
import MerchMenu from "./MerchMenu";

//Location
import { useLocation } from "react-router-dom";

//ReactHooks
import { useEffect } from "react";

const Home = () => {
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
