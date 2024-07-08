import { useRouteError } from "react-router-dom";

function ErrorPage(){
    const error = useRouteError();

    return (
        <>
            <p>Under construction</p>
        </>
    )
}

export {ErrorPage}