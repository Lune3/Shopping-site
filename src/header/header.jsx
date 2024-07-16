import { Nav } from "./nav"
import './header.css'

function Header({itemAmount}){

    return (
        <header>
           <div className="title">
                <h1>DapperDash</h1>
                <Nav></Nav>
           </div>
           <div className="search">
                <input type="text" placeholder="Search for a product"/>
                <ul className="icons">
                    <li>
                        <img src="src/assets/heart-svgrepo-com.svg"/>
                    </li>
                    <li className="cart">
                        <div key={itemAmount} style={{backgroundColor:itemAmount > 0 ?"black":""}} className="cartItems">{itemAmount > 0 ? itemAmount:""}</div>
                        <img src="src/assets/shopping-bag-svgrepo-com.svg"></img>
                    </li>
                    <li>
                        <img src="src/assets/user-rounded-svgrepo-com.svg"></img>
                    </li>
                </ul>
           </div>
        </header>
        
    )
}

export { Header}