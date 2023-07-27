// Router
import { Link } from "react-router-dom";

// Svg
import { ReactComponent as Filter } from "../assets/Images/svg/Filter.svg";
import { ReactComponent as Chevron } from "../assets/Images/svg/Chevron.svg";

import ffff from "../assets/Images/trend-product-slider-img/ffff.webp";

const Shop = () => {
  return (
    <section className="shop">
      <div className="container">
        <div className="row">
          <div className="top">
            <div className="title">
              <h2>Erkek Ayakkabıları</h2>
            </div>
            <div className="right">
              <button className="filterBtn">
                Filtreleri Göster
                <Filter className="filter" />
              </button>
              <button className="rankingBtn">
                Sıralama Ölçütü
                <Chevron className="downChevron" />
              </button>
            </div>
          </div>
          <div className="bottom">
            <Link to="/ProductDetails">
              <div className="card">
                <div className="cardImg">
                  <img src={ffff} alt="" />
                </div>
                <div className="cardInfo">
                  <h6 className="title">Name</h6>
                  <p className="aboutProduct">Erkek Ayakkabısı</p>
                  <span className="price">0 ₺</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
