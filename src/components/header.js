import React from 'react';
import JLogo from '../imgs/jordan-logo.png';
import { Link } from 'react-router-dom';
import "../styles/header.css";

function Header(){
    return(
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <span className="nav-text">
                        <a href="/"className="navbar-brand">
                            <img src={JLogo} alt="Architect Jordan's logo" width="100" height="56"/>
                        </a>       
                    </span>           
                    <span className="nav-text">
                        <a href="/projects" className="nav-link">
                            Projects
                        </a>
                    </span>
                    {/*
                    <span>
                        <Link to="/projects_info" className="nav-link">
                            Projects Info
                        </Link>
                    </span>
                    */}
                    <span>
                        <Link to="/about" className="nav-link">
                            About
                        </Link>                    
                    </span>
                    <span>
                        <Link to="/contact" className="nav-link">
                            Contact
                        </Link>   
                    </span>                                                                                         
                </div>
            </nav>        
    );
};

export default Header;