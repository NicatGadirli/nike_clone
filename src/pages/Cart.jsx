import DV0788_001 from "../assets/Images/svg/DV0788_001.jpeg";

//Section
import TrendProduct from "../components/TrendProduct";

//Db
import quantity from "../db/quantity";
import sizes from "../db/sizes";

//Loading
import Loading from "../components/Loading";

// Svg
import { ReactComponent as Heart } from "../assets/Images/svg/Heart.svg";
import { ReactComponent as Trash } from "../assets/Images/svg/Trash.svg";
import { useState } from "react";

const Cart = () => {
  const[refresh,setRefresh]=useState(false)

  return (
    <>
      <section className="cart">
      {refresh && <Loading/>}
        <div className="container">
          <div className="row">
            <div className="leftArea">
              <h5 className="leftAreaTitle">Sepet</h5>
              <p className="cartMessage">Sepetinde ürün yok.</p>
              <div className="product">
                <div className="left">
                  <div className="leftImg">
                    <img src={DV0788_001} alt="" />
                  </div>
                  <div className="cartInfo">
                    <p className="productName">name</p>
                    <b>Erkek Ayakkabısı</b>
                    <div className="quantityBox">
                      <div className="number">
                        Numara/Beden
                        <select id="select">
                          {sizes.map((sizenumber)=>(
                            <option key={sizenumber.id}>{sizenumber.number}</option>
                          ))}
                        </select>
                      </div>
                      <div className="quantity">
                        Adet
                        <select id="select">
                          {quantity.map((numbers) => (
                            <option key={numbers.id}>{numbers.number}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="operationIcons">
                      <button>
                        <Heart className="icons" />
                      </button>
                      <button>
                        <Trash className="icons" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <span className="price">₺ 0</span>
                </div>
              </div>
            </div>
            <div className="rightArea">
              <h5 className="rightAreaTitle">Özet</h5>
              <div className="totalBox">
                <div className="subTotal">
                  <div className="text">Ara Toplam</div>
                  <div className="number">₺6.299,80</div>
                </div>
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
                <button>Üye Girişi Yaparak Ödeme</button>
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
