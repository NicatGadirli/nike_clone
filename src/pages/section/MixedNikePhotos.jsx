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
import mixedNikePhotos from "../../db/mixedNikePhotos";

const MixedNikePhotos = () => {
  return (
    <section className="MixedNikePhotos">
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
              spaceBetween: 20,
              slidesPerView: 1,
            },
            768: {
              spaceBetween: 20,
              slidesPerView: 2,
            },
            1024: {
              spaceBetween: 20,
              slidesPerView: 4.8,
            },
          }}
        >
          {mixedNikePhotos.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="MixedNikePhotosImgBox">
                <Link to="/">
                  <img src={item.img} alt="athleteModelImg" />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="MixedNikePhotosInfo">
        <Link to="/">Aksesuarlar</Link>
      </div>
    </section>
  );
};

export default MixedNikePhotos;
