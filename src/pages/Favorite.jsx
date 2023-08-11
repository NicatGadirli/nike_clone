import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../utils/Context';

const Favorite = () => {
  const { favorites } = useContext(Context);

  return (
    <>
      <section className="favorite">
        <div className="container">
          <div className="row">
            <div className="top">
              <div className="left">
                <h4>Favoriler</h4>
              </div>
            </div>
            <div className="bottom">
              {favorites.length === 0 ? (
                <h5 className="favoriteMessage">Favori ürününüz yok.</h5>
              ) : (
                favorites.map((product) => (
                  <div className="card" key={product.id}>
                    <Link to={`/product-details/${product.id}`}>
                      <div className="cardImg">
                        <img
                          src={`http://localhost:5000/${product.productImage}`}
                          alt={product.name}
                        />
                      </div>
                      <div className="cardInfo">
                        <div className="productInfo">
                          <p className="productName">{product.name}</p>
                          <span className="price">₺ {product.price}</span>
                        </div>
                        <p className="ProductType">{product.type}</p>
                      </div>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Favorite;
