import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notFound">
      <div className="container">
        <div className="row">
          <h2>NOT FOUND:/</h2>
          <div className="link">
            <Link to="/">ANA SAYFA</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound