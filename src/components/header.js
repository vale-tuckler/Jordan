import React, { useEffect } from 'react';
import JLogo from '../imgs/jordan-logo.png';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import "../styles/header.css";

function Header(){
    function headerAnimations(){
        let headerTimeline = gsap.timeline({delay:0.5});
        headerTimeline
            .fromTo(".navbar",{opacity:0},{duration:1.3, opacity:1, ease: "circ.out", visibility:"visible"});
            return headerTimeline;
    };
    useEffect(() => {
        headerAnimations();
    },[]);
    return(        
            <nav className="navbar navbar-expand-lg navbar-light bg-dark container-fluid">                          
                        <span className="link-container">
                            <Link to="/"className="navbar-brand">
                                <img src={JLogo} alt="Architect Jordan's logo" title="&copy; Architect Jordan" width="100" height="56"/>
                            </Link>                               
                        </span>
                        <span className="link-container">
                            <Link to="/projects" className="nav-link" id="projects-link">
                                Projects
                            </Link>
                        </span>
                        <span className="link-container">
                            <Link to="/about" className="nav-link" id="about-link">
                                About
                            </Link>                    
                        </span>                        

                        <span className="link-container">
                            <Link to="/contact" className="nav-link" id="contact-link">
                                Contact
                            </Link>   
                        </span>x                                                                                                                   
            </nav>        
    );
};

export default Header;