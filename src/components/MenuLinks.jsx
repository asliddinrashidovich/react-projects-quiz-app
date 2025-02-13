// import { Link } from "react-router-dom"
import UseFetch from "../hooks/UseFetch"
import ErrorPage from "../pages/ErrorPage"

function MenuLinks() {
    let API = 'https://67a209b8409de5ed52540ec2.mockapi.io/api/v1/quizzapp'
    const {data: items, isPending, error} = UseFetch(API)
    // console.log(items[0].quizzes)
  return (
    <div>
        {isPending && <h4>Loading...</h4>}
        {error && <ErrorPage/>}
    </div>
  )
}

export default MenuLinks