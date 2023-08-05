//Section
import TrendProduct from "../components/TrendProduct";

//Db
import quantity from "../db/quantity";
import sizes from "../db/sizes";

// Svg
import { ReactComponent as Heart } from "../assets/Images/svg/Heart.svg";
import { ReactComponent as Trash } from "../assets/Images/svg/Trash.svg";

//Context
import { useContext } from "react";
import { Context } from "../utils/Context";

const Cart = () => {
  //Global States
  const { cart, removeFromCart, incrementProduct } = useContext(Context)

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
                          <select id="select" defaultValue={product.quantity} onChange={()=>incrementProduct(product)}>
                            {
                              quantity.map((nums) => (
                                <option key={nums.id}>{nums.number}</option>
                              ))
                            }
                          </select>
                        </div>
                      </div>
                      <div className="operationIcons">
                        <button>
                          <Heart className="icons" />
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
                  <div className="number">₺6.299,80</div>
                </div>
              </div>
              <div className="rightAreaBtn">
                <button>Ödeme</button>
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
