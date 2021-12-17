import React,{useState,useEffect} from 'react'

export default function Products() {
    const [products,setProducts] = useState([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData =() => {
        fetch('http://localhost:8080/products/all')
        .then(response => response.json())
        .then(data => {
            if (data !== null) {  
                console.log(data)   
                setProducts(data)      
            }
            else{
                console.log("Data is null")
            }
        });
    }
    console.log(products)
    return (
        <div>
            <h1>At Product Page</h1>
            {
                products.map((product)=>{
                    return <div>
                                <h1>{product.category}</h1>
                                <h2>{product.imageUrl}</h2>
                                <h2>{product.price}</h2>
                                <h2>{product.name}</h2>
                            </div>
                })
            }
        </div>
    )
}
