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
import nikeMemembership from "../db/nikeMemembership";

const NikeMembership = () => {
  return (
    <section className="nikeMembership">
      <div className="nikeMembershipTitle">
        <h3>Nike Üyeliği</h3>
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
        >
          {nikeMemembership.map((item) => (
            <SwiperSlide>
              <div className="membershipImgBox">
                <Link to="/">
                  <img src={item.img} alt="athleteModelImg" />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="membershipInfo">
        <Link to="/">Üye Ürünlerine Eriş</Link>
      </div>
    </section>
  );
};

export default NikeMembership;
