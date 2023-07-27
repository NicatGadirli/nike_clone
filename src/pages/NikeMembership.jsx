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
import MembershipFirstSlide from "../assets/Images/82581424-385a-4f79-816d-0f91e6a531a3.webp";
import MembershipThirdSlide from "../assets/Images/7969cc4e-a711-4b2d-ba24-be2dcf79dca5.webp";
import MembershipFourthSlide from "../assets/Images/1163f9d5-7b28-46e5-b73b-4d3d2ff4dbc3.webp";
import MembershipSecondSlide from "../assets/Images/0adeba8e-1935-4470-aa71-49fd666bbc3b.webp";
import MembershipFifthSlide from "../assets/Images/5e36df8e-007f-4b18-bea3-47af5a7ea0d2.webp";
import MembershipSixthSlide from "../assets/Images/11ca5257-bffa-4fb0-b3cc-b020cd5a7eb2.webp";
import MembershipSeventhSlide from "../assets/Images/0adeba8e-1935-4470-aa71-49fd666bbc3b.webp";
import MembershipEighthSlide from "../assets/Images/11ca5257-bffa-4fb0-b3cc-b020cd5a7eb2.webp";
import MembershipNinthSlide from "../assets/Images/82581424-385a-4f79-816d-0f91e6a531a3.webp";
import MembershipTenthSlide from "../assets/Images/7969cc4e-a711-4b2d-ba24-be2dcf79dca5.webp";


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
          <SwiperSlide>
            <div className="membershipImgBox">
              <Link to="/">
                <img src={MembershipFirstSlide}  alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="membershipImgBox">
              <Link to="/">
                <img src={MembershipSecondSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="membershipImgBox">
              <Link to="/">
                <img src={MembershipThirdSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="membershipImgBox">
              <Link to="/">
                <img src={MembershipFourthSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="membershipImgBox">
              <Link to="/">
                <img src={MembershipFifthSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="membershipImgBox">
              <Link to="/">
                <img src={MembershipSixthSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="membershipImgBox">
              <Link to="/">
                <img src={MembershipSeventhSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="membershipImgBox">
              <Link to="/">
                <img src={MembershipEighthSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="membershipImgBox">
              <Link to="/">
                <img src={MembershipNinthSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="membershipImgBox">
              <Link to="/">
                <img src={MembershipTenthSlide} alt="athleteModelImg" />
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="membershipInfo">
        <Link to="/">Üye Ürünlerine Eriş</Link>
      </div>
    </section>
  );
};

export default NikeMembership;
