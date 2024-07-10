async function getProducts(){
    try{
        const response = await fetch('https://api.escuelajs.co/api/v1/products',{mode:"cors"});
        if(!response.ok){
            throw new Error(`HTTP error: Status ${response.status}`);
        } 
    }
    catch (error){
        console.log(error);
    }
    
    const products = await response.json();
    console.log(products);
}

export {getProducts}