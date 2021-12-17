import styled from "styled-components";

const Container = styled.div`
    flex:1;
    padding: 5px;
    margin:3px;
    height: 70vh;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    top: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    font-weight: 500;
`;
const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    cursor: pointer;
    color: gray;
    font-weight: 600;
`;

export const CategoryItems = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>Shop Now</Button>
            </Info>
        </Container>
    )
}
