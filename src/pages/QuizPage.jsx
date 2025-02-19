import { useParams } from "react-router-dom"
import UseFetch from "../hooks/UseFetch"
import ErrorPage from "./ErrorPage"
import Test from "../components/Test"

function QuizPage() {
  const prot = useParams()
  function readId() {
    if(prot.title == 'HTML') {
      return 1
    } else if(prot.title == 'CSS') {
      return 2
    } else if(prot.title == 'JavaScript') {
      return 3
    } else {
      return 4
    }
  }


  let API = `https://67a209b8409de5ed52540ec2.mockapi.io/api/v1/asliddin-api/${readId()}`
  const {data: items, isPending, error} = UseFetch(API)


  return (
    <div className="quiz-container container">
        {isPending && <h2>Loading...</h2>}
        {error && <ErrorPage/>}

        {items &&
          <div>
            <Test quiz={items}/>
          </div>
        }
    </div>
  )
}

export default QuizPage