import React from 'react';
import styled from 'styled-components';
import Footer from '../Components/Footer';
import { Navbar } from '../Components/Navbar';
import Newsletter from '../Components/NewsLetter';

const Container = styled.div`
    background-color: white;
    align-items: center;
`;
const Wrapper = styled.div`
    width: 400px;
    height: 400px;
    margin: 50px;
    border: 2px solid lightgray;
    text-align: center;
    display: block;
    border-radius: 10%;
`;

const Title = styled.h1`
    text-align: center;
`;

const Quantity = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    margin-right: 10px;
`;

const ProductsHeading = styled.h3`

`;

const ProductsCount = styled.h5`
`;

const Pricing = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    margin-right: 10px;
`;

const PricingHeading = styled.h3``;

const PricingCount = styled.h5``;

const Delivery = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    margin-right: 10px;
`;

const DeliveryHeading = styled.h3``;

const DeliveryCharges = styled.h5``;

const Discounts = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    margin-right: 10px;
`;

const DiscountsHeading = styled.h3``;

const DiscountAmount = styled.h5``;

const PaymentButton = styled.button`
    cursor: pointer;
    width: 100px;
    height: 40px;
    border-radius: 5px;
    background-color: black;
    color: white;
`;



export const CheckoutPage = () => {
    return (
        <Container>
            <Navbar/>
                <Wrapper>
                    <Title>
                        Billing Details
                    </Title>
                    <Quantity>
                        <ProductsHeading>
                            Total Products
                        </ProductsHeading>
                        <ProductsCount>
                            5
                        </ProductsCount>
                    </Quantity>
                    <Pricing>
                        <PricingHeading>
                            Total Amount
                        </PricingHeading>
                        <PricingCount>
                            Rs.10000
                        </PricingCount>
                    </Pricing>
                    <Delivery>
                        <DeliveryHeading>
                            DeliveryCharges
                        </DeliveryHeading>
                        <DeliveryCharges>
                            Rs. 100
                        </DeliveryCharges>
                    </Delivery>
                    <Discounts>
                        <DiscountsHeading>
                            Discount
                        </DiscountsHeading>
                        <DiscountAmount>
                            Rs. 100
                        </DiscountAmount>
                    </Discounts>
                    <PaymentButton>
                        Pay
                    </PaymentButton>
                </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}
