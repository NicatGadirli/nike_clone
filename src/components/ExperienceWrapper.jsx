// Router
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const BottomHeader = () => {
  return (
    <header className="experienceWrapper">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="firstSlide">
          <span>Tüm Yeni Çıkan Ürünleri incele</span>
          <Link to="/">İncele</Link>
        </SwiperSlide>
        <SwiperSlide>
          Bayram tatili nedeniyle bazı teslimatlar normalden uzun sürebilir.
        </SwiperSlide>
        <SwiperSlide className="thirdSlide">
          <span>Türk İthalat Mevzuatı</span>
          <p>
            150 € üzeri siparişlerin teslimi garanti edilemiyor.
            <Link to="/">Daha fazla bilgi.</Link>
          </p>
        </SwiperSlide>
      </Swiper>
    </header>
  );
};

export default BottomHeader;
