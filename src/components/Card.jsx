import { Link } from 'react-router-dom'

const Card = ({data}) => {
  return (
    <Link to={`/product-details/${data.id}`}>
    <div className="card">
      <div className="cardImg">
        <img src={`http://localhost:5000/${data.productImage}`} alt="" />
      </div>
      <div className="cardInfo">
        <h6 className="title">{data.name}</h6>
        <p className="aboutProduct">{data.type}</p>
        <span className="price">{data.price} ₺</span>
      </div>
    </div>
  </Link>
  )
}

export default Card