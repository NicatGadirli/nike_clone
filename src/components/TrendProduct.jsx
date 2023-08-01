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
import { useState } from "react";

import trendProduct from "../db/trendProduct";

const TrendProduct = () => {
  const [setSwiperRef] = useState(null);

  return (
    <section className="trendProduct">
      <div className="container">
        <div className="trendProductInfo">
          <h3 className="trendProductTitle">Bu Haftanın Trend Ürünleri</h3>
        </div>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3.4}
          centeredSlides={true}
          navigation={true}
          spaceBetween={20}
          loop={true}
          modules={[Navigation, Pagination]}
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
          {trendProduct.map((item) => (
            <SwiperSlide className="SwiperSlide" key={item.id}>
              <div className="card">
                <Link>
                  <div className="cardImg">
                    <img src={item.img} alt="TrendShoes" />
                  </div>
                  <div className="cardInfo">
                    <div className="productInfo">
                      <p className="productName">{item.title}</p>
                      <span className="price">₺{item.price}</span>
                    </div>
                    <p className="ProductType">Ayakkabı</p>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TrendProduct;
