
import MenuLinks from "../components/MenuLinks"

function HomePage() {
  return (
    <div className="home-container container">
        <div className="home-content">
            <h1 className="home-title">
                <span>Welcome to the</span>
                <span>Frontend Quiz!</span>
            </h1>
            <p>Pick a subject to get started</p>
        </div>
        <div>
            <MenuLinks/>
        </div>
    </div>
  )
}

export default HomePage