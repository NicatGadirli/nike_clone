// Card
import Card from "../components/Card";

//Loading
import Loading from "../components/Loading";

import axios from "axios";

// Svg
import { ReactComponent as Filter } from "../assets/Images/svg/Filter.svg";
import { ReactComponent as Chevron } from "../assets/Images/svg/Chevron.svg";

//ReactHooks
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// 
const Shop = () => {
  const [refresh, setRefresh] = useState(false)

  const [product, setProduct] = useState([])

  //Router
  const navigate = useNavigate()

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    setRefresh(true)
    try {
      await axios.get("http://localhost:5000/api/products").then((res) => {
        setProduct(res.data);
        setRefresh(false)
      })
    } catch (error) {
      setRefresh(false)
      navigate("/error")
    }
  }

  return (
    <section className="shop">
      {refresh && <Loading />}
      <div className="container">
        <div className="row">
          <div className="top">
            <div className="title">
              <h2>Erkek Ayakkabıları</h2>
            </div>
            <div className="right">
              <button className="filterBtn">
                Filtreleri Göster
                <Filter className="filter" />
              </button>
              <button className="rankingBtn">
                Sıralama Ölçütü
                <Chevron className="downChevron" />
              </button>
            </div>
          </div>
          <div className="bottom">
            {product.map((product) => (
              <Card data={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
