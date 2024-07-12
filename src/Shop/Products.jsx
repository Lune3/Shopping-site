import { useEffect, useState } from "react";
import { getProducts } from "./productAPI";
import {Items} from "./Items";

function Products(){

    const [error,setError] = useState();
    const [products,setProducts] = useState();
    const [constProducts,setConstProduct] = useState();
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try{
                const productData = await getProducts();
                console.log(productData);
                setProducts(productData);
                setConstProduct(productData);
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

    function filterProduct(e){
        if(e.target.value === ""){
            setProducts(constProducts);
        }
        else{
            const newProductList = constProducts.filter((product) => {
                return product.category === e.target.value;
            })
            setProducts(newProductList);
        }
    }

    return (
        <div className="itemGrid">
            <div className="selection" style={{display:"flex",justifyContent:"space-around"}}>
                <div style={{display:"flex"}}>
                    <div>Shop{" >"}</div><div>Products{" >"} </div>
                    <select id="products" onChange={filterProduct}>
                        <option value={""}>All</option>
                        <option value={"men's clothing"}>Men Clothing</option>
                        <option value={"electronics"}>Electronics</option>
                        <option value={"women's clothing"}>Women Clothing</option>
                        <option value={"jewelery"}>Jewellery</option>
                    </select>
                </div>
                <div >
                
                </div>
            </div>
            {loading ?"Please wait":(<Items products={products}/>)}
        </div>
    )
}

export {Products};