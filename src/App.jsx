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
      children: [
        {
          index: true,
          element: <HomePage/>,
          errorElement: <ErrorPage/>
        },
        {
          path: 'quiz',
          element: <QuizPage/>
        }
      ]
    }
  ])

  return <RouterProvider router={routes} />
}

export default App
