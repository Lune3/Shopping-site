import { Link } from "react-router-dom"

function Home(){
    return (
        <div className="home">
            <h2>Latest Collection</h2>
            <h1>GET 20% OFF ON ALL TROUSERS - LIMITED TIME ONLY</h1>
            <p>From tailored classic to contemporary essentials, we have a pair for every occasion</p>
            <button><Link to={'shop'}> Shop </Link></button>
        </div>
    )
}

export {Home}