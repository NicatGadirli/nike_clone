// Router
import { Link, useParams } from "react-router-dom";

//Axios
import axios from "axios";

//Context
import { useContext } from 'react'
import { Context } from '../utils/Context'

//ReactHooks
import { useEffect, useState } from "react";

//Location
import { useLocation } from "react-router-dom";

//Section
import TrendProduct from "../components/TrendProduct";

const Favorite = () => {
  //Add to Cart
  const { addToCart } = useContext(Context)

  const { productID } = useParams();

  const [product, setProduct] = useState([]);

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

  //Router
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

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
              {
                product.map((item) => (
                  <div className="card">
                    <Link to="/product-details">
                      <div className="cardImg">
                        <img src={`http://localhost:5000/${item.productImage}`} alt={product.name} />
                      </div>
                      <div className="cardInfo">
                        <div className="productInfo">
                          <p className="productName">{product.name}</p>
                          <span className="price">₺ {product.price}</span>
                        </div>
                        <p className="ProductType">{product.type}</p>
                      </div>
                    </Link>
                    <div className="cardBtn">
                      <Link to="/cart" className="favoriteBtn" onClick={() => addToCart(product)}>Sepete Ekle</Link>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <TrendProduct />
    </>
  );
};

export default Favorite;
