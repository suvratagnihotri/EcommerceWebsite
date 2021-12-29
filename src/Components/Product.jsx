import styled from "styled-components";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from "react-router-dom";


const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;  
    cursor: pointer;
`;

const Container = styled.div`
    /* background-color: gray; */
    flex: 1;
    display: flex;
    margin: 5px;
    cursor: pointer;
    min-width: 280px;
    height: 350px;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;

`;

const Image = styled.img`
    height: 75%;
    z-index: 1;
    transition: all 1s ease;
    &:hover {
    transform: scale(1.1);
  }
`;

const Icon = styled.div`
    z-index: 1;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;


export const Product = ({itemData}) => {
    let navigate = useNavigate();

    const handleProductClick = () =>{
        console.log(itemData)
        navigate("../mainproduct", {state:itemData}, { replace: false });
    }

    const handleCartClick =(itemData)=>
    {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name:itemData.name,category:itemData.category,price:itemData.price,mainUrl:itemData.mainUrl,imageUrl1:itemData.imageUrl1,imageUrl2:itemData.imageUrl2,imageUrl3:itemData.imageUrl3 })
        };
        fetch('http://ec2-13-232-35-196.ap-south-1.compute.amazonaws.com:8080/ecommerce/cart/add', requestOptions)
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
    return (
        <Container onClick={handleProductClick}>
            <Circle/>
                <Image src={itemData.mainUrl}/>
                <Info>
                    <Icon>
                        <AddShoppingCartIcon onClick={()=>handleCartClick(itemData)}/>
                    </Icon>
                    <Icon>
                        <FavoriteBorderIcon/>
                    </Icon>
                </Info>
        </Container>
    )
}