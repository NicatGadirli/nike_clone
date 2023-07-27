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

//Photo
import SportFirstSlide from "../assets/Images/3aef76c8-46c5-4f2a-a18c-3e9bdc148433.webp";
import SportSecondSlide from "../assets/Images/5027a28c-3984-4287-94d1-ee6198238ce9.webp";
import SportThirdSlide from "../assets/Images/b4722f0f-c0e4-4a1b-8050-9f026ef947e9.webp";
import SportFourthSlide from "../assets/Images/ed6efa3d-bb62-4d41-89f1-49d01418fe49.webp";
import SportFifthSlide from "../assets/Images/11550514-c82b-46b2-afd8-e5dd62698371.webp";
import SportSixthSlide from "../assets/Images/5027a28c-3984-4287-94d1-ee6198238ce9.webp";
import SportSeventhSlide from "../assets/Images/1d2fd0c4-a7dd-4159-84c0-a0364c0990e3.webp";
import SportEighthSlide from "../assets/Images/5f432ab0-7ed1-48b9-b8c8-9eb3f5dcb63d.webp";
import SportNinthSlide from "../assets/Images/5027a28c-3984-4287-94d1-ee6198238ce9.webp";
import SportTenthSlide from "../assets/Images/be13cfe4-b5a9-4c26-bee0-b716e98b099d.webp";

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
        >
          <SwiperSlide>
            <div className="sportImgBox">
              <Link to="/">
                <img src={SportFirstSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sportImgBox">
              <Link to="/">
                <img src={SportSecondSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sportImgBox">
              <Link to="/">
                <img src={SportThirdSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sportImgBox">
              <Link to="/">
                <img src={SportFourthSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sportImgBox">
              <Link to="/">
                <img src={SportFifthSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sportImgBox">
              <Link to="/">
                <img src={SportSixthSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sportImgBox">
              <Link to="/">
                <img src={SportSeventhSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sportImgBox">
              <Link to="/">
                <img src={SportEighthSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sportImgBox">
              <Link to="/">
                <img src={SportNinthSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sportImgBox">
              <Link to="/">
                <img src={SportTenthSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="sportInfo">
        <Link to="/">Koşu</Link>
      </div>
    </section>
  );
};

export default ForSport;
