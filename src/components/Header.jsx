import { Link, useParams } from "react-router-dom"


function Header() {
    const title = useParams();
  return (
    <div className="header header-container container">
        {title.title ? (
          <Link className="header-logo" to="/">
            <figure>
              <img
                src={`../assets/icon-${title.title.toLowerCase()}.svg`}
                alt="icon"
              />
            </figure>
            <span>{title.title}</span>
          </Link>
        ) : (
          <span></span>
        )}
        <div >
            <label htmlFor="dark" className="dark-btn">
                <input type="checkbox" id="dark" />
                <span>
                    <span></span>
                    <span></span>
                </span>
            </label>
        </div>
    </div>
  )
}

export default Header