import { Outlet } from "react-router-dom"
import Header from "../components/header"

function MainLayout() {
  return (
    <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <footer>
            <a href="https://asliddinnorboyev.uz" target="_blank">Asliddin</a>
        </footer>
    </>
  )
}

export default MainLayout