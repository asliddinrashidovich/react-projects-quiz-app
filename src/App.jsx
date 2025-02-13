import MainLayout from "./layout/mainLayout"
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import QuizPage from "./pages/QuizPage"

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <MainLayout/>,
      children: [
        {
          index: true,
          element: <HomePage/>
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
