import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { gsap } from 'gsap';
import loft from '../imgs/minimalist-loft/minimalist-loft1.png';
import efficiencyApt from '../imgs/efficiency-apt/efficiency-apt2.png';
import containerApt from '../imgs/containers-apt/containers-apt4.png';
import { Link } from 'react-router-dom';
import '../styles/projects.css';

function Projects(){
    function projectsAnimation(){        
        let projects = gsap.timeline();


        projects
        .fromTo([".projects-container"],
                {visibility:"hidden", opacity:0},
                {visibility:"visible", opacity:1, ease:"power3.inOut"})
        .fromTo(".title",
                {opacity:0},
                {opacity:1, 
                    visibility:"visible", 
                    ease:"power3.inOut",
                    duration:1,
                    delay:0.4})
        .fromTo([".project-face", "#third-image"],
                {opacity:0},
                {opacity:1, 
                    visibility:"visible", 
                    ease:"power3.inOut", 
                    duration:1, 
                    stagger:0.35});
        return projects;                                
    }
    
    useEffect(() => {
        projectsAnimation();
    });

    return(
        <div className="projects-container">
            <Header/>            
            <div className="container-fluid first-container">
                <h1 className="title justify-content">Minimalist Industrial Loft</h1>
                <Link to="/projects_info#minimalistLoft">
                    <img 
                        src={loft} 
                        alt="Minimalist industrial loft" 
                        title="Minimalist industrial loft" 
                        className="project-face h-100"
                    />
                </Link>            
            </div>
            <div className="container-fluid">
                <h1 className="title justify-content">Efficient Apartment</h1>
                <Link to="/projects_info#efficiencyApt">
                    <img 
                        src={efficiencyApt} 
                        alt="Efficiency apartment" 
                        title="Efficiency apartment" 
                        className="project-face h-100"
                    />
                </Link>
            </div>
            <div className="container-fluid third-container">
                <h1 className="title justify-content">Apartment made of containers</h1>
                <Link to="/projects_info#containersApt">
                    <img 
                        src={containerApt} 
                        alt="Containers apartment" 
                        title="Containers apartment" 
                        className="project-face h-100" 
                        id="third-image"
                    />
                </Link>                
            </div>
            <Footer/>
        </div>
    );
};

export default Projects;