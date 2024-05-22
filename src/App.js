import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainNav from "./Components/MainNav";

import AddADream from './Components/AddADream/AddADream';

export default function App(){
    return(
        <div style={{display:"flex", flexDirection: "column", minHeight: "100vh"}}>
        <Header />
        <MainNav />
        <AddADream />
        <Footer />
        </div>
    )
};