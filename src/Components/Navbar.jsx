import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    height :60px;
    margin-bottom: 20px;
    // background-color : black

`;

const Wrapper = styled.div`
    padding :10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    /* padding: 5px; */
`;

const Input = styled.input`
    border: none;
`

const Left = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    padding: 5px; 
`;


const Center = styled.div`
    flex: 1;
    align-items: center;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14;
    cursor: pointer;
    margin-left: 25px;
`


export const Navbar = () => {
    let navigate = useNavigate();

    const handleCartClick = ()=>
    {
        navigate("../cart", { replace: false });
    }

    const handleRegister = () =>{
        navigate("../register", { replace: false });
    }

    const handleSignin = () =>{
        navigate("../login", { replace: false });
    }

    return (
        <Container>
            <Wrapper>
            <Left>
            <Language>EN</Language>
            <SearchContainer>
            <Input/>
                <SearchIcon style={{color:"gray", fontSize:"16px"}}/>
            </SearchContainer>
            </Left>
            <Center>
                <Logo>Asylum.</Logo>
            </Center>
            <Right>
                <MenuItem onClick={handleRegister}>Register</MenuItem>
                <MenuItem onClick={handleSignin}>Sign In</MenuItem>
                <IconButton aria-label="cart" onClick={handleCartClick}>
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Right>
            </Wrapper>
        </Container>
    )
}
