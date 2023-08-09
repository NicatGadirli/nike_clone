//Context
import { useContext } from 'react'
import { Context } from '../utils/Context'

// Router
import { Link, useParams } from "react-router-dom";

//Axios
import axios from "axios";

// Svg
import { ReactComponent as Star } from "../assets/Images/svg/Star.svg";
import { ReactComponent as Heart } from "../assets/Images/svg/Heart.svg";

//Sections
import TrendProduct from "../components/TrendProduct";

//ReactHooks
import { useEffect, useState } from "react";

//Location
import { useLocation } from "react-router-dom";

import productDetailsSizes from "../db/productDetailsSizes"

const ProductDetails = () => {
  //Add to Cart
  const { addToCart } = useContext(Context)

  const [isFavorite, setIsFavorite] = useState(false);

  const { productID } = useParams();

  const [product, setProduct] = useState({});


  //Add То Favorite
  const handleFavoriteToggle = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };


  const [activeSize, setActiveSize] = useState(null);

  const handleSizeClick = (size) => {
    setActiveSize(size);
  };


  //Router
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  useEffect(() => {
    const getData = async () => {
      try {
        await axios
          .get(`http://localhost:5000/api/products/${productID}`)
          .then((res) => {
            if (res.status === 200) {
              setProduct(res.data);
            }
          });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [productID]);
  return (
    <>
      <section className="productDetails">
        <div className="container">
          <div className="row">
            {product && (
              <div className="hiddenTop">
                <h6>Sürdürülebilir Malzemeler</h6>
                <h5 className="title">{product.name}</h5>
                <p className="detail">{product.type}</p>
                <span className="price">{product.price} ₺</span>
              </div>
            )}
            <div className="productImg">
              <div className="scoreBox">
                <Star className="starIcon" />
                <span>Yüksek Puanlı</span>
              </div>
              {product.productImage && (
                <img
                  src={` http://localhost:5000/${product.productImage}`}
                  alt={product.name}
                />
              )}
            </div>
            <div className="aboutProduct">
              <div className="top">
                <h6>Sürdürülebilir Malzemeler</h6>
                <h5 className="title">{product.name}</h5>
                <p className="detail">{product.type}</p>
                <span className="price">{product.price} ₺</span>
              </div>
              <div className="middle">
                <div className="chooseNumber">
                  <p>Numara/Beden Seç</p>
                  <Link>Beden/Numara Rehberi</Link>
                </div>
                <div className="sizesBox">
                  {productDetailsSizes.map((sizes) => (
                    <div className={`sizes ${activeSize === "EU 40" ? "active" : ""}`}
                      onClick={() => handleSizeClick("EU 40")} key={sizes.id}>EU {sizes.size}</div>
                  ))}
                </div>
                <div className="operationBtn">
                  <button className="addCart" onClick={() => addToCart(product)}>Sepete Ekle</button>
                  <Link to="/favorite" className="addToFavorite" onClick={handleFavoriteToggle} >
                    {isFavorite ? 'Favoriden Çıkar' : 'Favori'}
                    <Heart className="heart" />
                  </Link>
                </div>
              </div>
              <div className="bottom">
                <div className="adminMessage">
                  <span>
                    Bu ürün, ağırlığının en az %20'si oranında geri
                    dönüştürülmüş malzemelerden <br />
                    üretilmiştir
                  </span>
                </div>
                <div className="productInfo">
                  <p>
                    {product.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <TrendProduct />
      </section>
    </>
  );
};

export default ProductDetails;
