import { useEffect, useState } from "react";
import { getProducts } from "./productAPI";
import { Items } from "./Items";

function Products({prop}){

    const [error,setError] = useState();
    const [products,setProducts] = useState();
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try{
                const productData = await getProducts();
                setProducts(productData);
            }
            catch(err){
                setError(err);
                setProducts(null);
            }
            finally{
                setLoading(false);
            }
        }
        fetchProduct();

        return () =>{
            setProducts(null);
            setLoading(true);
        }
    },[]);

    return (
        <div className="itemGrid">
            {loading ?"Please wait":(<Items products={products}/>)}
        </div>
    )
}

export {Products};