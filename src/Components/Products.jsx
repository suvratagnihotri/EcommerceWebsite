import React, { useState,useEffect } from "react";
import styled from "styled-components";
// import { popularProducts } from "../data";
import { Product } from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Products = () => {
    const [products,setProducts] = useState([]);


    useEffect(() => {
        fetch("http://ec2-13-232-35-196.ap-south-1.compute.amazonaws.com:8080/ecommerce/products/all")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setProducts(data)
        })
    },[]);
    console.log("Popular Products are :",products);
    return (
        <Container>
            {products.map(item=>(
                <Product itemData = {item}/>
            ))}
        </Container>
    )
}
