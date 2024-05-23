import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainNav from "./Components/MainNav";
import AddADream from './Components/AddADream/AddADream';
import styled from 'styled-components';

const StyledDiv = styled.div`
    all: unset;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    width: 100vw;
    color: #f1f1f1;
`;

export default function App(){
    return(
        <StyledDiv>
        <Header />
        <MainNav />
        <AddADream />
        <Footer />
        </StyledDiv>
    )
};