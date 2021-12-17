import styled from 'styled-components'
import React, { useState } from 'react'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { sliderItems } from '../data';

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
/* background-color: coral; */
overflow: hidden;
position: relative;
flex: 1;
`;

const Arrow = styled.div`
    height: 50px;
    width: 50px;
    background-color: #fff7f7;
    border-radius:50%;
    align-items: center;
    justify-content: center;
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 1;
    left:${props=>props.direction==="left" && "10px"};
    right:${props=>props.direction==="right" && "10px"};
    cursor:pointer;
    opacity: 0.5;

`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 100%;
    width: fit-content;
    object-fit: fill;
`;

const ImageInfo = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;


const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;


const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;


export const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) =>{
        if(direction==="left"){
            setSlideIndex(slideIndex>0?slideIndex-1:2);
        }
        else{
            setSlideIndex(slideIndex<2?slideIndex+1:0);
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowBackIosNewOutlinedIcon/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>

                {sliderItems.map(item =>(
                    <Slide bg={item.bg}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <ImageInfo>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>Show Now</Button>
                    </ImageInfo>
                </Slide>
                ))}

            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowForwardIosOutlinedIcon/>
            </Arrow>
        </Container>
    )
}