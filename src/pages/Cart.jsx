//Section
import TrendProduct from "../components/TrendProduct";

//Db
import quantity from "../db/quantity";
import sizes from "../db/sizes";

// Svg
import { ReactComponent as Heart } from "../assets/Images/svg/Heart.svg";
import { ReactComponent as Trash } from "../assets/Images/svg/Trash.svg";
import { ReactComponent as BlackHeart } from "../assets/Images/svg/BlackHeart.svg";


//Context
import { useContext } from "react";
import { Context } from "../utils/Context";

//ReactHooks
import { useEffect } from "react";

//Location
import { Link, useLocation } from "react-router-dom";

const Cart = () => {
  //Global States
  const { cart, removeFromCart, favorites, changeQuantity, totalPrice, addToFavorites, removeFromFavorites } = useContext(Context)


  const isCartEmpty = cart.length === 0;


  //Router
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  return (
    <>
      <section className="cart">
        <div className="container">
          <div className="row">
            <div className="leftArea">
              <h5 className="leftAreaTitle">Sepet</h5>
              {cart.length === 0 && (<p className="cartMessage">Sepetinde ürün yok.</p>)}
              {cart.map((product) => (
                <div className="product" key={product.id}>
                  <div className="left">
                    <div className="leftImg">
                      <img
                        src={`http://localhost:5000/${product.productImage}`}
                        alt={product.name}
                      />
                    </div>
                    <div className="cartInfo">
                      <p className="productName">{product.name}</p>
                      <b>Erkek Ayakkabısı</b>
                      <div className="quantityBox">
                        <div className="number">
                          Numara/Beden
                          <select id="select">
                            {
                              sizes.map((nums) => (
                                <option key={nums.id}>{nums.number}</option>
                              ))
                            }
                          </select>
                        </div>
                        <div className="quantity">
                          Adet
                          <select
                            id="select"
                            value={product.quantity}
                            onChange={(e) =>
                              changeQuantity(
                                product,
                                parseInt(e.target.value)
                              )
                            }
                          >
                            {quantity.map((nums) => (
                              <option key={nums.id} value={nums.number}>
                                {nums.number}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="operationIcons">
                        <button onClick={() => favorites.includes(product) ? removeFromFavorites(product.id) : addToFavorites(product)}>
                          {favorites.includes(product) ? (
                            <BlackHeart className={`icons favorited`} />
                          ) : (
                            <Heart className={`icons`} />
                          )}
                        </button>
                        <button>
                          <Trash className="icons" onClick={() => removeFromCart(product.id)} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <span className="price">₺ {product.price}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="rightArea">
              <h5 className="rightAreaTitle">Özet</h5>
              <div className="totalBox">
                <div className="cargo">
                  <div className="text">Tahmini Kargo ve İşlem Ücreti</div>
                  <div className="answer">Ücretsiz</div>
                </div>
                <div className="sum">
                  <div className="text">Toplam</div>
                  <div className="number">₺{totalPrice}</div>
                </div>
              </div>
              <div className="rightAreaBtn">
                {isCartEmpty ? (
                  <button disabled>Sepet Boş</button>
                ) : (
                  <Link to="/pay">Ödeme</Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <TrendProduct />
    </>
  );
};

export default Cart;
