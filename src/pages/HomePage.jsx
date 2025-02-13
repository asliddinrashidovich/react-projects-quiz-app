import UseFetch from "../hooks/UseFetch"

function HomePage() {
    let API = 'https://67a209b8409de5ed52540ec2.mockapi.io/api/v1/quizzapp'
    const {data: items, isPending, error} = UseFetch(API)
  return (
    <div className="home-container container">
        <div className="home-content">
            <h1 className="home-title">
                <span>Welcome to the</span>
                <span>Frontend Quiz!</span>
            </h1>
            <p>Pick a subject to get started</p>
        </div>
        <div className="menu-list">
            {isPending && <h4>Loading...</h4>}
            
        </div>
    </div>
  )
}

export default HomePage