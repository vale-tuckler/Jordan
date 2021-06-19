import React from 'react';
import behance from '../imgs/behance-50.png';
import instagram from '../imgs/instagram-52.png';
import mail from '../imgs/mail-50.png';
import '../styles/footer.css';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <nav className="navbar myFooter navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <Link to ="#" className="navbar-brand">
                            <img src={behance} alt="Behance logo" title="Behance logo" width="73%" height="40%"/>
                        </Link>
                    </li>      
                    <li className="navbar-item">
                        <Link to="#" className="navbar-brand">
                            <img src={instagram} alt="Instagram logo" title="Instagram logo" width="68%" height="40%"/>
                        </Link>
                    </li>              
                    <li className="navbar-item">
                        <Link to="#" className="navbar-brand">
                            <img src={mail} alt="Mail logo" title="Mail logo" width="75%" height="40%"/>
                        </Link>
                    </li>
                </ul>                
            </div>
        </nav>
    );
};

export default Footer;
