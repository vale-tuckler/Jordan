import React from 'react';
import Header from "../components/header";
import Footer from '../components/footer';
import "../styles/home.css";

function Home(){
    return(
        <div id="home">                        
            <Header/>    
                <span id="title-container">
                    <h1 id="title">Jordan Tuckler</h1>      
                </span>                   
            <Footer/>           
        </div>
    );
};

export default Home;