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

const Home = () => {
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
      <MerchMenu/>
    </main>
  );
};

export default Home;
