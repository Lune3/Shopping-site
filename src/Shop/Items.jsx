import { useOutletContext } from "react-router-dom";

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
    const [itemAmount,setItemAmount] = useOutletContext();

    function increaseAmount(){
        let newCount = itemAmount + 1;
        setItemAmount(newCount);
    }

    function decreaseAmount(){
        if(itemAmount > 0){
            let newCount = itemAmount - 1;
            setItemAmount(newCount);
        }
    }

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
                    <div className="cartUpdate">
                        <img src="src/assets/minus-svgrepo-com.svg" onClick={decreaseAmount}  alt="Remove item image"/>
                        <input type="number"/>
                        <img src="src/assets/plus-svgrepo-com.svg" onClick={increaseAmount} alt="Add item image"/>
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