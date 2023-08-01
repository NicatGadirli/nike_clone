// Router
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//Db
import forSport from "../db/forSport";

const ForSport = () => {
  return (
    <section className="forSport">
      <div className="forSportTitle">
        <h3>Spora Göre İncele</h3>
      </div>
      <div className="row">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          slidesPerView={4.8}
          navigation={true}
          loop={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            468: {
              width: 468,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1024:{
              width: 1496,
              slidesPerView: 4.8,
            }
          }}
        >
          {forSport.map((item) => (
            <SwiperSlide key={item.id} className="swiperSlide">
              <div className="sportImgBox">
                <Link to="/">
                  <img src={item.img} alt="athleteModelImg" />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="sportInfo">
        <Link to="/">Koşu</Link>
      </div>
    </section>
  );
};

export default ForSport;
