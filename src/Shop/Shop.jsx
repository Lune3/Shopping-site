import { Products } from "./Products"
import { useOutletContext } from "react-router-dom";
import "./shop.css"

function Shop(){

    return (
        <div className="shop">
            <Products/>
        </div>
    )
}

export {Shop}