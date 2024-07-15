import { useEffect, useState } from "react";
import { getProducts } from "./productAPI";
import {Items} from "./Items";
import { Loading } from "./Loading";

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
            <div className="selection" style={{display:"flex",justifyContent:"space-around",marginBottom:"45px",fontSize:"1.2rem"}}>
                <div style={{display:"flex",gap:"10px"}}>
                    <div>Shop{" >"}</div><div>Products{" >"} </div>
                    <select id="products" onChange={filterProduct}>
                        <option value={""}>All</option>
                        <option value={"men's clothing"}>Men Clothing</option>
                        <option value={"electronics"}>Electronics</option>
                        <option value={"women's clothing"}>Women Clothing</option>
                        <option value={"jewelery"}>Jewellery</option>
                    </select>
                </div>
                <div style={{marginRight:"500px"}}>
                </div>
            </div>
            {loading ?(<Loading/>):(<Items products={products}/>)}
        </div>
    )
}

export {Products};