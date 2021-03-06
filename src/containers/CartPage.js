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
    /* border-top: 1px solid lightgray; */
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
    let navigate = useNavigate();

    useEffect(() => {
        fetch("http://ec2-13-232-35-196.ap-south-1.compute.amazonaws.com:8080/ecommerce/cart/all")
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            setProducts(data)
        })
    },[])

    console.log(products);

    const handleKeepShopping = () =>
    {
        navigate("../home", { replace: false });
    }

    const handleCheckOut = (cartProducts) => {
        console.log(cartProducts)
        navigate("../checkout", {state:cartProducts},{ replace: false });
    }

    const handleProductClick = (clickedProduct)=> {
        // console.log(clickedProduct)
        navigate("../mainproduct", {state:clickedProduct}, { replace: false });
    }

    return (
        <Container>
            <Navbar/>
            <Options>
                <OptionButton option={"shopping"} onClick={handleKeepShopping}>
                    Keep Shopping
                </OptionButton>
                <OptionButton totalProducts={products} option={"checkout"} onClick={() => handleCheckOut(products)}>
                    Checkout Now
                </OptionButton>
            </Options>
            {products.map(product=>(
                <Wrapper>
                <ImageContainer product={product} onClick={() => handleProductClick(product)}>
                    <Image src={product.mainUrl}/>
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