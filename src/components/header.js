import React from 'react';
import JLogo from '../imgs/jordan-logo.png';
import { Link } from 'react-router-dom';

function Header(){
    return(
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <Link to="/"className="navbar-brand">
                        <img src={JLogo} alt="Architect Jordan's logo" width="100" height="55"/>
                    </Link>       
                    <Link to="/projects" className="nav-link">Projects</Link>
                    <Link to="projects_info" className="nav-link">Projects Info</Link>
                    <Link to="/about" className="nav-link">About</Link>                    
                    <Link to="/contact" className="nav-link">Contact</Link>                                
                </div>
            </nav>        
    );
};

export default Header;