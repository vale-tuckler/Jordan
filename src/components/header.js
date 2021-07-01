import React from 'react';
import JLogo from '../imgs/jordan-logo.png';
import { Link } from 'react-router-dom';
import "../styles/header.css";

function Header(){
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