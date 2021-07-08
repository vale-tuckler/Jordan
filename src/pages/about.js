import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import "../styles/about.css";

function About(){
    return(
        <div className="about-container">           
            <Header/> 
            <h1>This is my about page</h1>
            <Footer/>
        </div>
    );
};

export default About;