import { Outlet } from "react-router-dom"
import { Header } from "./header/header"
import { useState } from "react"

function App() {

    const [itemAmount,setItemAmount] = useState(0);

    return (
        <>
            <Header itemAmount={itemAmount}/>
            <Outlet context={[itemAmount,setItemAmount]}/>
        </>
    )
}

export default App
