import { Outlet } from "react-router-dom"
import { Header } from "./header/header"
import { useState } from "react"

import "./App.css"

function App() {

    const [itemAmount,setItemAmount] = useState(0);

    return (
        <div className="app">
            <Header itemAmount={itemAmount}/>
            <Outlet context={[itemAmount,setItemAmount]}/>
        </div>
    )
}

export default App
