// Router
import { Link, useParams } from "react-router-dom";

//Axios
import axios from "axios";

//Photo
import Shoe from "../assets/Images/cosmic-unity-3-basketbol-ayakkabısı-lVP6Vb.jpeg";

// Svg
import { ReactComponent as Star } from "../assets/Images/svg/Star.svg";
import { ReactComponent as Heart } from "../assets/Images/svg/Heart.svg";

//Sections
import TrendProduct from "../components/TrendProduct";

//ReactHooks
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { productID } = useParams()

  const [product, setProduct] = useState(null)

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      await axios
        .get(`http://localhost:5000/api/products/${productID}`)
        .then((res) => {
          setProduct(res.data);
        })
    } catch (error) {
      console.log(error);
    }
  }

  console.log(product);
  return (
    <>
      <section className="productDetails">
        <div className="container">
          <div className="row">
            <div className="hiddenTop">
              <h6>Sürdürülebilir Malzemeler</h6>
              <h5 className="title">{product.name}</h5>
              <p className="detail">{product.type}</p>
              <span className="price">{product.price} ₺</span>
            </div>
            <div className="productImg">
              <div className="scoreBox">
                <Star className="starIcon" />
                <span>Yüksek Puanlı</span>
              </div>
              <img src={Shoe} alt="ProductImage" />
            </div>
            <div className="aboutProduct">
              <div className="top">
                <h6>Sürdürülebilir Malzemeler</h6>
                <h5 className="title">Cosmic Unity 3</h5>
                <p className="detail">Basketbol Ayakkabısı</p>
                <span className="price">5.099,90 ₺</span>
              </div>
              <div className="middle">
                <div className="chooseNumber">
                  <p>Numara/Beden Seç</p>
                  <Link>Beden/Numara Rehberi</Link>
                </div>
                <div className="sizesBox">
                  <div className="sizes">EU 40</div>
                  <div className="sizes">EU 40.5</div>
                  <div className="sizes">EU 41</div>
                  <div className="sizes">EU 42</div>
                  <div className="sizes">EU 42.5</div>
                  <div className="sizes">EU 43</div>
                  <div className="sizes">EU 44</div>
                  <div className="sizes">EU 44.5</div>
                  <div className="sizes">EU 45</div>
                  <div className="sizes">EU 45.5</div>
                  <div className="sizes">EU 46</div>
                  <div className="sizes">EU 47</div>
                  <div className="sizes">EU 47.5</div>
                  <div className="sizes">EU 48.5</div>
                </div>
                <div className="operationBtn">
                  <button className="addCart">Sepete Ekle</button>
                  <button className="addToFavorite">
                    <span>Favori</span>
                    <Heart className="heart" />
                  </button>
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
                    Oyunun için geliştirilmesi ve sürdürülebilirlik düşünülerek
                    tasarlanmasıyla önem verdiğin 2 konuya yoğunlaşan Cosmic
                    Unity 3, yere yakın ve hafif yapısıyla ayağını sabitler.
                    Bulut gibi yastıklaması, her yıl sıra dışı yeni yeteneklerin
                    ortaya çıktığı basketbolda aniden hızlanma ve çabuk yön
                    değiştirmelerle fark yaratmanı sağlar.
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
