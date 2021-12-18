import React from 'react';
import styled from 'styled-components';
import Footer from '../Components/Footer';
import { Navbar } from '../Components/Navbar';
import Newsletter from '../Components/NewsLetter';

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
    /* border: 1px solid lightgrey; */
    /* align-items: center; */
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



export const CartPage = () => {
    return (
        <Container>
            <Navbar/>
            <Options>
                <OptionButton option={"shopping"}>
                    Keep Shopping
                </OptionButton>
                <OptionButton option={"checkout"}>
                    Checkout Now
                </OptionButton>
            </Options>
            <Wrapper>
                <ImageContainer>
                    <Image src="https://cdn.shopify.com/s/files/1/0537/9771/6146/products/11_24e30cf8-c557-49c6-9835-c142ddc82957_900x.jpg?v=1639320973"/>
                </ImageContainer>
                <ProductInfo>
                    <Title>
                        Best Product
                    </Title>
                    <Description>
                        Here comes the description.
                    </Description>
                    <Price>
                        Rs. 5000
                    </Price>
                    <Quantity>
                        <QuantityButton>
                            -
                        </QuantityButton>
                        <Amount>1</Amount>
                        <QuantityButton>
                            +
                        </QuantityButton>
                    </Quantity>
                </ProductInfo>
            </Wrapper>

            <Wrapper>
                <ImageContainer>
                    <Image src="https://cdn.shopify.com/s/files/1/0537/9771/6146/products/11_24e30cf8-c557-49c6-9835-c142ddc82957_900x.jpg?v=1639320973"/>
                </ImageContainer>
                <ProductInfo>
                    <Title>
                        Best Product
                    </Title>
                    <Description>
                        Here comes the description.
                    </Description>
                    <Price>
                        Rs. 5000
                    </Price>
                    <Quantity>
                        <QuantityButton>
                            -
                        </QuantityButton>
                        <Amount>1</Amount>
                        <QuantityButton>
                            +
                        </QuantityButton>
                    </Quantity>
                </ProductInfo>
            </Wrapper>

            <Wrapper>
                <ImageContainer>
                    <Image src="https://cdn.shopify.com/s/files/1/0537/9771/6146/products/11_24e30cf8-c557-49c6-9835-c142ddc82957_900x.jpg?v=1639320973"/>
                </ImageContainer>
                <ProductInfo>
                    <Title>
                        Best Product
                    </Title>
                    <Description>
                        Here comes the description.
                    </Description>
                    <Price>
                        Rs. 5000
                    </Price>
                    <Quantity>
                        <QuantityButton>
                            -
                        </QuantityButton>
                        <Amount>1</Amount>
                        <QuantityButton>
                            +
                        </QuantityButton>
                    </Quantity>
                </ProductInfo>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}
