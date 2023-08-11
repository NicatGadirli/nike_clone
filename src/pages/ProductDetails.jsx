import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

//Axios
import axios from 'axios';

//Svg
import { ReactComponent as Star } from '../assets/Images/svg/Star.svg';
import { ReactComponent as Heart } from '../assets/Images/svg/Heart.svg';
import { ReactComponent as BlackHeart } from '../assets/Images/svg/BlackHeart.svg';

//Section
import TrendProduct from '../components/TrendProduct';

//Context
import { Context } from '../utils/Context';

//Data Base
import productDetailsSizes from '../db/productDetailsSizes';

const ProductDetails = () => {
  const { addToCart, addToFavorites, removeFromFavorites, favorites } = useContext(Context);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeSize, setActiveSize] = useState(null);
  const [sizeSelected, setSizeSelected] = useState(true);
  const [product, setProduct] = useState({});
  const { productID } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${productID}`);
        if (res.status === 200) {
          setProduct(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [productID]);

  useEffect(() => {
    // Check if the product is already a favorite
    setIsFavorite(favorites.some(item => item.id === product.id));
  }, [favorites, product.id]);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const handleSizeClick = (size) => {
    setActiveSize(size);
    setSizeSelected(true);
  };

  const handleAddToCart = () => {
    if (activeSize) {
      addToCart(product);
      setSizeSelected(true);
    } else {
      setSizeSelected(false);
    }
  };
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
                <div className={`sizesBox ${!sizeSelected ? 'noSizeSelected' : ''}`}>
                  {productDetailsSizes.map((sizes) => (
                    <div
                      className={`sizes ${activeSize === `EU ${sizes.size}` ? 'activeSize' : ''}`}
                      onClick={() => handleSizeClick(`EU ${sizes.size}`)}
                      key={sizes.id}
                    >
                      EU {sizes.size}
                    </div>
                  ))}
                </div>
                <div className="operationBtn">
                  <button className="addCart" onClick={handleAddToCart}>
                    Sepete Ekle
                  </button>
                  <button
                    to="/favorite"
                    className="addToFavorite"
                    onClick={handleFavoriteToggle}
                  >
                    {isFavorite ? 'Favoriden Çıkar' : 'Favori'}
                    {isFavorite ? <BlackHeart className="heart" /> : <Heart className="heart" />}
                  </button>
                </div>
              </div>
              <div className="bottom">
                <div className="adminMessage">
                  <span>
                    Bu ürün, ağırlığının en az %20'si oranında geri dönüştürülmüş
                    malzemelerden <br />
                    üretilmiştir
                  </span>
                </div>
                <div className="productInfo">
                  <p>{product.details}</p>
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
