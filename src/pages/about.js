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
                        <h1 id="titleName">Arq. Jordan Tuckler</h1>                        
                            <p className="description">
                                Architecture began as a rural, 
                                oral vernacular craft 
                                that developed from trial and 
                                error to successful replication. 
                                Ancient urban architecture was 
                                preoccupied with building 
                                religious structures and buildings 
                                symbolizing the political power of rulers 
                                until Greek and Roman architecture 
                                shifted focus to civic virtues
                                paving the way for modern architecture.
                            </p>
                            <p className="description">
                                Let me guide you with my designs through
                                what has been the expression of culture for so many
                                centuries and has now become the way to build the future.
                                Construction.
                            </p>
                            <p className="description">
                                I'm an architect. I love learning and innovation because it opens
                                the gates toward a future where buildings as well as
                                their planning and construction will all be in harmony with
                                their natural environments.               
                            </p>
                    </article> 
                </section>
            <Footer/>
        </div>
    );
};

export default About;