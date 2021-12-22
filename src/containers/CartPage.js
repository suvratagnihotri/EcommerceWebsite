import React, { useState,useEffect} from 'react';
import styled from 'styled-components';
import Footer from '../Components/Footer';
import { Navbar } from '../Components/Navbar';
import Newsletter from '../Components/NewsLetter';
import { useNavigate } from "react-router-dom";
import { QuantityButtons } from '../Components/QuantityButtons';


const Container = styled.div`
    background-color: white;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    border: 1px solid lightgrey;
    border-bottom: 0.5px solid lightgrey;
    padding: 10px;
`;

const Options = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid lightgray;
`;

const OptionButton = styled.button`
    cursor: pointer;
    width: 140px;
    height: 40px;
    border: 1px solid ${props=>props.option==="shopping"?"black":"white"};
    border-radius: 2px;
    color: ${props=>props.option==="shopping"?"black":"white"};
    background-color: ${props=>props.option==="shopping"?"white":"black"};
    margin-left: ${props=>props.option==="shopping"&&"5px"};
    margin-right: ${props=>props.option==="checkout"&&"5px"};

`;

const ImageContainer = styled.div`
    width: 90%;
    height: 100%;
    flex: 1;
    justify-content: center;
    background-color: #d9d9d9;
    background: transparent;
    z-index: 1;
`;

const Image = styled.img`
    cursor: pointer;
    width: 90%;
    height: 90%;
    /* border: 1px solid black;  */
    transition: all 2s ease;
    object-fit: cover;
    z-index: 2;
    &:hover{
        transform: scale(1.1);
    }
`;

const ProductInfo = styled.div`
    width: 100%;
    height: 90%;
    display: block;
    flex: 2;
    margin-left:20px;
`;

const Title = styled.h1``;

const Description = styled.p``;

const Price = styled.h3``;

const Quantity = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */
`;

export const CartPage = () => {
    const [products,setProducts] = useState([]);
    const [clickedProduct, setClickedProduct] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/cart/all")
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            setProducts(data)
        })
    },[])

    const handleKeepShopping = () =>
    {
        navigate("../home", { replace: false });
    }

    const handleCheckOut = () =>{
        navigate("../checkout", { replace: false });
    }


    return (
        <Container>
            <Navbar/>
            <Options>
                <OptionButton option={"shopping"} onClick={handleKeepShopping}>
                    Keep Shopping
                </OptionButton>
                <OptionButton option={"checkout"} onClick={handleCheckOut}>
                    Checkout Now
                </OptionButton>
            </Options>
            {products.map(product=>(
                <Wrapper>
                <ImageContainer>
                    <Image src={product.imageUrl}/>
                </ImageContainer>
                <ProductInfo>
                    <Title>
                        {product.name}
                    </Title>
                    <Description>
                        Here comes the description.
                    </Description>
                    <Price>
                        {product.price}
                    </Price>
                    <Quantity>
                        <QuantityButtons product={product}/>
                    </Quantity>
                </ProductInfo>
            </Wrapper>
            ))}
            <Newsletter/>
            <Footer/>
        </Container>
    )
}
