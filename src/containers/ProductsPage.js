import styled from 'styled-components';
import Footer from '../Components/Footer';
import { Navbar } from '../Components/Navbar';
import Newsletter from '../Components/NewsLetter';
import {Products} from '../Components/Products';

const Container = styled.div``;

export const ProductsPage = () => {
    return (
        <Container>
            <Navbar/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}
