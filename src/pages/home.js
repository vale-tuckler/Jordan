import React, { useEffect } from 'react';
import Header from "../components/header";
import Footer from '../components/footer';
import gsap from 'gsap';
import "../styles/home.css";

export default function Home(){

        function homeAnimations(){
            let homeTimeline = gsap.timeline();
            homeTimeline   
                .fromTo("#home",
                        {visibility:"hidden", opacity:0},
                        {visibility:"visible", opacity:1, ease:"power2.out"})             
                .fromTo("#title",
                            {y:0, opacity:0},
                            {duration:1, ease:"power2.out", y:-30, opacity:1, visibility:"visible", delay:0.7}
                        )
                .fromTo("#description",
                            {y:15, opacity:0},
                            {duration:1, ease:"power2.out", y:-5, opacity:1, visibility:"visible", delay:0.2}                            
                );

                return homeTimeline;
        };           

        useEffect(() => {
            homeAnimations();
        });

        return(
            <div id="home">                        
                <Header/>    
                    <span id = "title-container">
                        <h1 id= "title">Jordan Tuckler</h1>                          
                    </span>  
                    <span id="description-container">
                        <h2 id="description">Architect</h2>
                    </span>                             
                <Footer/>           
            </div>
        );
}