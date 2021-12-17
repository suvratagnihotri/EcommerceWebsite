import styled from "styled-components";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


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
    z-index: 2;
`;

const Icon = styled.div`
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
    return (
        <Container>
            <Circle/>
                <Image src={itemData.img}/>
                <Info>
                    <Icon>
                        <AddShoppingCartIcon/>
                    </Icon>
                    <Icon>
                        <FavoriteBorderIcon/>
                    </Icon>
                </Info>
        </Container>
    )
}