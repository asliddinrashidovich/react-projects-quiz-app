import { Link } from "react-router-dom"

function ErrorPage() {
  return (
    <div className="">
        <h1>this is Error</h1>
        <Link to='/'>Home page</Link>
    </div>
  )
}

export default ErrorPage