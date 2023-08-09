import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="page_404">
      <div className="container">
        <div className="title">
          <h2>ERROR NOT FOUND 404</h2>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
              </div>
              <div className="contant_box_404">
                <p>Aradığınız sayfa mevcut değil!</p>
                <Link to="/" className="link_404">ANA SAYFA</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound
