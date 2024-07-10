async function getProducts(){
    const response = await fetch('https://fakestoreapi.com/products',{mode:"cors"});
    if(!response.ok){
        throw new Error(`HTTP error:Status ${response.status}`);
    }
    return response.json();
    
}

export {getProducts}