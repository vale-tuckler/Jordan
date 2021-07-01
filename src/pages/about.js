import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function About(){
    return(
        <div className="about">           
            <Header/> 
            <h1>This is my about page</h1>
            <Footer/>
        </div>
    );
};

export default About;