// Router
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation  } from "swiper/modules";

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
        >
{
  trendProduct.map(item=>(
              <SwiperSlide className="SwiperSlide">
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
  ))
}
          {/* <SwiperSlide className="SwiperSlide">
            <div className="card">
              <Link>
                <div className="cardImg">
                  <img src={TrendProductThirdSlideImg} alt="TrendShoes" />
                </div>
                <div className="cardInfo">
                  <div className="productInfo">
                    <p className="productName">Nike Air Monarch IV</p>
                    <span className="price">₺1.799,9</span>
                  </div>
                  <p className="ProductType">Erkek Antrenman Ayakkabısı</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="SwiperSlide">
            <div className="card">
              <Link>
                <div className="cardImg">
                  <img src={TrendProductFourthSlideImg} alt="TrendShoes" />
                </div>
                <div className="cardInfo">
                  <div className="productInfo">
                    <p className="productName">Nike Air Force 1 '07</p>
                    <span className="price">₺2.999,9</span>
                  </div>
                  <p className="ProductType">Erkek Ayakkabısı</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="SwiperSlide">
            <div className="card">
              <Link>
                <div className="cardImg">
                  <img src={TrendProductFifthSlideImg} alt="TrendShoes" />
                </div>
                <div className="cardInfo">
                  <div className="productInfo">
                    <p className="productName">Nike Mercurial Superfly 9 Academy</p>
                    <span className="price">₺2.299,9</span>
                  </div>
                  <p className="ProductType">Çoklu Zemin Kramponu</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="SwiperSlide">
            <div className="card">
              <Link>
                <div className="cardImg">
                  <img src={TrendProductSixthSlideImg} alt="TrendShoes" />
                </div>
                <div className="cardInfo">
                  <div className="productInfo">
                    <p className="productName">Nike Mercurial Vapor 15 Academy</p>
                    <span className="price">₺1.199,9</span>
                  </div>
                  <p className="ProductType">Çoklu Zemin Kramponu</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="SwiperSlide">
            <div className="card">
              <Link>
                <div className="cardImg">
                  <img src={TrendProductSeventhSlideImg} alt="TrendShoes" />
                </div>
                <div className="cardInfo">
                  <div className="productInfo">
                    <p className="productName">Nike Tech Hera</p>
                    <span className="price">₺1.449,9</span>
                  </div>
                  <p className="ProductType">Kadın Sneaker'ları</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>{" "}

          <SwiperSlide className="SwiperSlide">
            <div className="card">
              <Link>
                <div className="cardImg">
                  <img src={TrendProductEighthSlideImg} alt="TrendShoes" />
                </div>
                <div className="cardInfo">
                  <div className="productInfo">
                    <p className="productName">Nike Zoom Mercurial Superfly 9 </p>
                    <span className="price">₺2.299,9</span>
                  </div>
                  <p className="ProductType">Çoklu Zemin Kramponu</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <div className="card">
              <Link>
                <div className="cardImg">
                  <img src={TrendProductNinthSlideImg} alt="TrendShoes" />
                </div>
                <div className="cardInfo">
                  <div className="productInfo">
                    <p className="productName">Nike Air Force 1 Shadow</p>
                    <span className="price">₺2.999,9</span>
                  </div>
                  <p className="ProductType">Kadın Ayakkabısı</p>
                </div>
              </Link>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  );
};

export default TrendProduct;
