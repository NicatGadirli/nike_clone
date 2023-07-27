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
import MixedNikePhotosFirstSlide from "../assets/Images/MixedNikePhotos/e70326d0-11ba-4fca-b4c3-757e12b1c4f6.webp";
import MixedNikePhotosSecondSlide from "../assets/Images/MixedNikePhotos/6978dc46-6aeb-431e-a8c2-2bef4cff4414.webp";
import MixedNikePhotosThirdSlide from "../assets/Images/MixedNikePhotos/0a4b9135-5daf-49ee-8a38-29cf46e5ed13.webp";
import MixedNikePhotosFourthSlide from "../assets/Images/MixedNikePhotos/ef44bd8e-0040-4741-99b7-2dc91912dd34.webp";
import MixedNikePhotosFifthSlide from "../assets/Images/MixedNikePhotos/50c0cdf3-6865-4489-99d8-b3f4bff66b7c.webp";
import MixedNikePhotosSixthSlide from "../assets/Images/MixedNikePhotos/resmi-nike-sitesi.jpg";
import MixedNikePhotosSeventhSlide from "../assets/Images/MixedNikePhotos/6978dc46-6aeb-431e-a8c2-2bef4cff4414.webp";
import MixedNikePhotosEighthSlide from "../assets/Images/MixedNikePhotos/ef44bd8e-0040-4741-99b7-2dc91912dd34.webp";
import MixedNikePhotosNinthSlide from "../assets/Images/MixedNikePhotos/resmi-nike-sitesi.jpg";
import MixedNikePhotosTenthSlide from "../assets/Images/MixedNikePhotos/50c0cdf3-6865-4489-99d8-b3f4bff66b7c.webp";

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
        >
          <SwiperSlide>
            <div className="MixedNikePhotosImgBox">
              <Link to="/">
                <img src={MixedNikePhotosFirstSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="MixedNikePhotosImgBox">
              <Link to="/">
                <img src={MixedNikePhotosSecondSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="MixedNikePhotosImgBox">
              <Link to="/">
                <img src={MixedNikePhotosThirdSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="MixedNikePhotosImgBox">
              <Link to="/">
                <img src={MixedNikePhotosFourthSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="MixedNikePhotosImgBox">
              <Link to="/">
                <img src={MixedNikePhotosFifthSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="MixedNikePhotosImgBox">
              <Link to="/">
                <img src={MixedNikePhotosSixthSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="MixedNikePhotosImgBox">
              <Link to="/">
                <img src={MixedNikePhotosSeventhSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="MixedNikePhotosImgBox">
              <Link to="/">
                <img src={MixedNikePhotosEighthSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="MixedNikePhotosImgBox">
              <Link to="/">
                <img src={MixedNikePhotosNinthSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="MixedNikePhotosImgBox">
              <Link to="/">
                <img src={MixedNikePhotosTenthSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="MixedNikePhotosInfo">
        <Link to="/">Aksesuarlar</Link>
      </div>
    </section>
  );
};

export default MixedNikePhotos;
