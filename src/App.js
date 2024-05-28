import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainNav from "./Components/MainNav";
import styled from 'styled-components';
import Main from './Components/Main';

const StyledDiv = styled.div`
    all: unset;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    width: 100%;
    color: #f1f1f1;
    overflow-x: hidden;
`;

export default function App(){
    return(
        <StyledDiv>
            <Header />
            <MainNav />
            <Main />
            <Footer />
        </StyledDiv>
    )
};