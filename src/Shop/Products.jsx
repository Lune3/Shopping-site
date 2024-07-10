import { useEffect, useState } from "react";
import { getProducts } from "./productAPI";

function Products(){

    const [error,setError] = useState();
    const [products,setProducts] = useState();

    useEffect(() => {
        const fetchProduct = async () => {
            try{
                const productData = await getProducts();
                console.log(productData);
            }
            catch(err){
                setError(err);
                setProducts(null);
            }
        }
        fetchProduct();

        return () =>{
            setProducts(null);
            console.log(products);
        }
    },[]);

    return (
        <div>

        </div>
    )
}

export {Products};