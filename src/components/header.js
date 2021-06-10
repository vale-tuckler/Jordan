import React from 'react';
import JLogo from '../imgs/jordan-logo.png';

function Header(){
    return(
        <nav className="navbar navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand" href="../pages/home.js">
                    <img src={JLogo} alt="Architect Jordan's logo" width="100" height="55"/>
                </a>
            </div>
        </nav>
    );
};

export default Header;