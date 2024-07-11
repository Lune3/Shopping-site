function trimLength(productName){
    let whiteSpaceCount = 0;
    for(let i = 0;i < productName.length;i++){
        if(productName[i] === ' '){
            whiteSpaceCount++;
        }
    }
    let newName = "";
    let i = 0;
    if(whiteSpaceCount > 5){
        let counter = 0;
        while(counter != 5){
            if(productName[i] === ' '){
                counter++;
            }
            newName += productName[i];
            i++;
        }
    }
    else{
        newName = productName;
    } 
    return newName;
}

function Items({products}){
    const ItemsList = products.map((product) => {
        return (
            <li key={product.id}>
                <picture>
                    <img src={product.image} alt="product image"/>
                </picture>
                <div>
                    <div>
                        <p>{trimLength(product.title)}</p>
                        <p>${product.price}</p>
                    </div>
                    <div>
                        <img/>
                        <input type="number"/>
                        <img />
                    </div>
                </div>
            </li>
        )
    })

    return (
        <ul className="productList">
            {ItemsList}
        </ul>
    )
}

export {Items}