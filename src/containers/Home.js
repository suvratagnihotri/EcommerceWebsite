import React, { useState,useEffect } from 'react';
import {Products} from '../Components/Products'
import styled from 'styled-components';
import { Navbar } from '../Components/Navbar';
import Announcements  from '../Components/Announcements';
import { Slider } from '../Components/Slider';
import { Categories } from '../Components/Categories';
import Newsletter from '../Components/NewsLetter';
import Footer from '../Components/Footer';

const Container = styled.div`
    align-items: center;
    background-color: white;
`


const Home= () => {
    return (
        <Container>
            <Announcements/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    );
}

export default Home;