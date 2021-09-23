import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Header from '../components/header';
import Footer from '../components/footer';
import Jlogo from '../imgs/jlogo.png';
import "../styles/about.css";

function About(){
    function aboutAnimations(){
        let about_tl = gsap.timeline({delay:1});
            about_tl    
                .fromTo("#section",
                        {opacity:0, visibility:"hidden"},
                        {opacity:1, visibility:"visible", duration:1.3})
            return about_tl;        

    };

    useEffect(() => {
        aboutAnimations();
    }, []);
    return(
        <div id="about-container">           
            <Header/> 
                <section id="section">
                    <article id="article">
                        <div className="titleCont">
                            <img 
                                src={Jlogo} 
                                alt="Jordan's logo" 
                                title="Jordan's logo"
                                id="aboutLogo"
                            />                                                   
                        </div>                        
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
                                All the above said, let me guide you with my designs through
                                what has been the expression of culture for so many
                                centuries and has now become the way to build the future.
                                Construction.
                            </p>
                            <p className="description">
                                Finally, I'm an architect. I love learning and innovation because it opens
                                the gates toward a future where buildings as well as
                                their planning and construction will all be in harmony with
                                their natural environments for the sake of a sustainable society.               
                            </p>
                    </article> 
                </section>
            <Footer/>
        </div>
    );
};

export default About;