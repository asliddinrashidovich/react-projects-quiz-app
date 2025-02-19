import { Link } from "react-router-dom"
import UseFetch from "../hooks/UseFetch"
import ErrorPage from "../pages/ErrorPage"

function MenuLinks() {
    let API = 'https://67a209b8409de5ed52540ec2.mockapi.io/api/v1/asliddin-api'
    const {data: items, isPending, error} = UseFetch(API)


  return (
    <div >
        {isPending && <h4>Loading...</h4>}
        {error && <ErrorPage/>}

        <div className="menu-list">
          {items &&
            items.map((item, i) => {
              return (
                <Link  className="menu-item header-logo" to={`/quiz/${item[0].title}`} key={item[0].title}>
                  <figure style={{backgroundColor: item[0].color, borderRadius: '6px'}}>
                    <img src={item[0].icon} alt="" />
                  </figure>
                  <span>{item[0].title}</span>
                </Link>
              )
            })
          }
        </div>
    </div>
  )
}

export default MenuLinks