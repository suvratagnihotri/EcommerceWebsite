import styled from 'styled-components';
import { useState } from 'react';


const Container = styled.div`
    display: flex;
    align-items: center;
`;

const QuantityButton = styled.button`
    background-color: white;
    cursor: pointer;
    width: 40px;
    height: 30px;
    margin-bottom: 20px;
`;

const Amount = styled.h2`
    /* align-items: center; */
    text-align: center;
    width: 40px;
    height: 40px;
`;

export const QuantityButtons = ({product}) => {
    const[productQuantity,setProductQuantity] = useState(product.quantity);
    const[mainProduct,setMainProduct] = useState(product);
    console.log(productQuantity)
    const handleQuantityButton = (operation) =>{
        if(operation==="-"){
            if(productQuantity>0){
                setProductQuantity(productQuantity-1);
                const requestOptions = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id:product.id,name:product.name,category:product.category,price:product.price,imageUrl:product.imageUrl })
                };
                fetch('http://ec2-13-232-35-196.ap-south-1.compute.amazonaws.com:8080/ecommerce/cart/remove', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data === true) {  
                        console.log(data)
                        console.log("Product is removed from the cart")          
                    }
                    else{
                      console.log("product cannot be removed from the cart")
                    }
                });

            } 
        }
        if(operation==="+"){
            setProductQuantity(productQuantity+1); 
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id:product.id,name:product.name,category:product.category,price:product.price,imageUrl:product.imageUrl })
            };
            fetch('http://localhost:8080/cart/add', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data === true) {  
                    console.log(data)
                    console.log("Product is added to the cart")          
                }
                else{
                  console.log("product cannot be added to the cart")
                }
            });
        }
    }
    return (
        <Container>
            <QuantityButton onClick={()=>handleQuantityButton("-")}>
                -
            </QuantityButton>
                <Amount>{productQuantity}</Amount>
            <QuantityButton onClick={()=>handleQuantityButton("+")}>
                +
            </QuantityButton>
        </Container>
    )
}
