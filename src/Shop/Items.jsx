function Items({products}){
    const ItemsList = products.map((product) => {
        return (
            <li key={product.id}>
                <picture>
                    <img src={product.image} alt="product image"/>
                </picture>
                <div>
                    <div>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
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