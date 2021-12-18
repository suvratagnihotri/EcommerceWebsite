import styled from 'styled-components';
import {Navbar} from '../Components/Navbar';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Footer from '../Components/Footer';
import Newsletter from '../Components/NewsLetter';


const Container = styled.div`
    background-color: white;
`;

const VerticalImages = styled.div`

    width: 15%;
    display: block;
    margin-left: 10px;
`;

const VerticalImage = styled.img`
    border: 2px solid black;
    cursor: pointer;
    margin: 5px;
    width: 80%;
    height: 20%;
    transition: all 2s ease;
    &:hover {
    transform: scale(1.1);}
`;

const Wrapper = styled.div`
    display: flex;
    margin-top: 10px;
`;

const Image = styled.img`
    border: 1px solid black;
    flex: 1;
    width: 50%;
    height: 100%;
`;

const ImageInfo = styled.div`
    flex: 2;
    width: 100%;
    margin-left: 25px;
    display: block;
`;

const Title = styled.h1`
    font-size: 16px;
`;

const Amount = styled.span`
    color: gray;
    position: relative;
    font-weight: inherit;
    font-size: 35px ;
    text-decoration: inherit;
`;

const Description = styled.p`
    color: #a6a6a6;
    box-sizing: border-box;
    word-spacing: 8px;
`;

const Size = styled.div`
    display: block;
`;


const SizeText = styled.h1`
    font-size: 16px;
`;

const SizeButtons = styled.div`
    display: flex;
    font-size: 20px;
`;

const Button = styled.button`
    cursor: pointer;
    margin: 3px;
    border-radius: 40px;
    border: 1px solid #ddd;
    padding: 5px;
    max-width: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
`;

const Color = styled.div``;

const ColorText = styled.h1`
    font-size: 16px;
`;

const ColorButton = styled.button`
    cursor: pointer;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: #f0deba;
    background-size: cover;
    background-position: center;
    text-align:center;
    box-sizing: border-box;
`;

const Checkout = styled.div`
    padding: 5px;
    margin-top: 25px;
    display: flex;
`;

const Count = styled.div`
    min-width: 120px;
    /* width: 120px; */
    height: 40px;
    border: 1px solid #222;
    display: flex;
    text-align: center;
    border-radius: 40%;
    border-left: none;
    border-right: none;
    margin-right: 10px;
    /* margin: 10px; */
`;

const QuantityButton = styled.button`

    width: 40px;
    height: 40px;
    cursor: pointer;
    border: 1px solid #222;
    border-radius: 50%;
    background-color: white;
    /* border-right: ${props=>props.buttonType==="-" && "none"};
    border-left: ${props=>props.buttonType==="+" && "none"}; */
`;

const Quantity = styled.h3`
    /* height: 10%; */
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
`;

const AddToCartButton = styled.button`
    cursor: pointer;
    width: auto;
    min-width: 160px;
    max-width: 100%;
    text-transform:uppercase;
    background-color: black;
    border-radius: 30%;
    color: white;
`;





// const Button = styled.button``;




export const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Wrapper>
                <VerticalImages>
                    <VerticalImage src="https://cdn.shopify.com/s/files/1/0537/9771/6146/products/11_24e30cf8-c557-49c6-9835-c142ddc82957_900x.jpg?v=1639320973"/>
                    <VerticalImage src="https://cdn.shopify.com/s/files/1/0537/9771/6146/products/11_24e30cf8-c557-49c6-9835-c142ddc82957_900x.jpg?v=1639320973"/>
                    <VerticalImage src="https://cdn.shopify.com/s/files/1/0537/9771/6146/products/11_24e30cf8-c557-49c6-9835-c142ddc82957_900x.jpg?v=1639320973"/>
                    <VerticalImage src="https://cdn.shopify.com/s/files/1/0537/9771/6146/products/11_24e30cf8-c557-49c6-9835-c142ddc82957_900x.jpg?v=1639320973"/>

                </VerticalImages>
                <Image src="https://cdn.shopify.com/s/files/1/0537/9771/6146/products/11_24e30cf8-c557-49c6-9835-c142ddc82957_900x.jpg?v=1639320973"/>
                <ImageInfo>
                    <Title>360 Stretch Comfort Knit Blazer</Title>
                    <Amount>Rs.5000</Amount>
                    <Description>Combining winter comfort with laid back luxury, this 4-Way stretch knit blazer is crafted in premium fabric and comes with matching drawstring pants.</Description>
                    <Size>
                        <SizeText>
                            Select Size
                        </SizeText>
                        <SizeButtons>
                            <Button>Small</Button>
                            <Button>Medium</Button>
                            <Button>Large</Button>
                        </SizeButtons>
                    </Size>
                    <Color>
                        <ColorText>
                            Color Name
                        </ColorText>
                        <ColorButton/>
                    </Color>
                    <Checkout>
                        <Count>
                            <QuantityButton buttonType="-">
                                -
                            </QuantityButton>
                            <Quantity>
                                1
                            </Quantity>
                            <QuantityButton buttonType="+">
                                +
                            </QuantityButton>
                        </Count>
                        <AddToCartButton>
                            AddToCart
                        </AddToCartButton>
                        <FavoriteBorderOutlinedIcon style={{height:"40px", width:"40px",cursor:"pointer",marginLeft:"5px"} }/>   
                    </Checkout>
                </ImageInfo>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
        )

}