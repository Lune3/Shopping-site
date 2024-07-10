import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link>Shop</Link>
                </li>
                <li>
                    LookBook
                </li>
                <li>
                    Support
                </li>
            </ul>
        </nav>
    )

}

export {Nav}