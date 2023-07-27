import DV0788_001 from "../assets/Images/svg/DV0788_001.jpeg";

// Svg
import { ReactComponent as Heart } from "../assets/Images/svg/Heart.svg";
import { ReactComponent as Trash } from "../assets/Images/svg/Trash.svg";

const Cart = () => {
  return (
    <section className="cart">
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
                        <option value="">35.5</option>
                        <option value="">36</option>
                        <option value="">36.5</option>
                        <option value="">37.5</option>
                        <option value="">38</option>
                        <option value="">38.5</option>
                        <option value="">39</option>
                        <option value="">40</option>
                        <option value="">40.5</option>
                        <option value="">41</option>
                        <option value="">42</option>
                      </select>
                    </div>
                    <div className="quantity">
                      Adet
                      <select id="select">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
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
  );
};

export default Cart;
