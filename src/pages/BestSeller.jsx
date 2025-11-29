import HomeCarousel from "./home/HomeCarousel";
import HomeServices from "../component/HomeServices";
import HomeProductsOffer from "../component/HomeProductsOffer";
import HomeOur from "../component/HomeOur";
import HomeBanner from "../component/HomeBanner";
import BestsellerList from "../component/BestsellerList";
import Encabezado from "../component/Encabezado";

const BestSeller = () => {
  return (
    <>
      <Encabezado titulo={"Bestseller Products"} />
      <HomeServices />
      <HomeProductsOffer />
      <BestsellerList />
      <HomeOur />
      <HomeBanner />
    </>
  );
};

export default BestSeller;
