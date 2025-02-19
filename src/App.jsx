import MainLayout from "./layout/mainLayout"
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import QuizPage from "./pages/QuizPage"
import ErrorPage from "./pages/ErrorPage"

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <HomePage/>,
        },
        {
          path: '/quiz/:title',
          element: <QuizPage/>
        }
      ]
    }
  ])

  return <RouterProvider router={routes} />
}

export default App
