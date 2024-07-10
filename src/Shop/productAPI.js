async function getProducts(){
    const response = await fetch('https://api.escuelajs.co/api/v1/products',{mode:"cors"});
    if(!response.ok){
        throw new Error(`HTTP error:Status ${response.status}`);
    }
    return response.json();
    
}

export {getProducts}