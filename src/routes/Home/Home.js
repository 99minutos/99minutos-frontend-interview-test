import {Link} from "react-router-dom"

function Home() {
    return (
        <div>
            <h1>
                <Link to="/dashboard">Dashboard</Link>
            </h1>
        </div>
    )
}

export default Home
