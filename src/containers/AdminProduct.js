import React, { useState,useEffect } from 'react'

export const AdminProduct = () => {
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
    
    console.log("Props are ")
    console.log(products)
    return (
        <div>
            {products.map((product)=>{
                return <h1>{product.category}</h1>
            })}
        </div>
    )
}