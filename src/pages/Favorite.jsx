import { Link } from "react-router-dom";

//?Sillllllllll
import Hello from "../assets/Images/temp/DJ6040_102.jpeg";

//Section
import TrendProduct from "../components/TrendProduct";

const Favorite = () => {
  return (
    <>
      <section className="favorite">
        <div className="container">
          <div className="row">
            <div className="top">
              <div className="left">
                <h4>Favoriler</h4>
              </div>
              <button className="favoriteBtn">Düzenle</button>
            </div>
            <div className="favoriteMessage">
              <h5>Favorilerine eklenen öğeler buraya kaydedilecek.</h5>
            </div>
            <div className="bottom">
              <div className="card">
                <Link to="/product-details">
                  <div className="cardImg">
                    <img src={Hello} alt="TrendShoes" />
                  </div>
                  <div className="cardInfo">
                    <div className="productInfo">
                      <p className="productName">title</p>
                      <span className="price">₺ 0</span>
                    </div>
                    <p className="ProductType">Ayakkabı</p>
                    <div className="cardBtn">
                      <button className="favoriteBtn">Sepete Ekle</button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TrendProduct />
    </>
  );
};

export default Favorite;
