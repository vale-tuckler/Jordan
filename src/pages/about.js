import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import "../styles/about.css";

function About(){
    return(
        <div id="about-container">           
            <Header/> 
                <section id="section">
                    <article id="article">
                        <h1>Jordan Tuckler</h1>
                        <p id="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </article> 
                </section>
            <Footer/>
        </div>
    );
};

export default About;