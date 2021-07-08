import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/contact.css';

function Contact(){
    return(
        <body id="contactBody">
            <Header/>
                <div className="formContainer">
                    <h2>Send a message ⚡️</h2>
                    <form>
                        <div className="user-box">
                            <label for="userName">Name:</label>
                            <input type="text" name="userName" id="userName" className="input"/>                            
                        </div>
                        <div className="user-box">
                            <label for="userEmail">Email:</label>
                            <input type="email" name="userEmail" id="userEmail" className="input"/>                            
                        </div>
                        <div className="user-box">
                            <label for="userMsg">Message:</label>
                            <textarea type="text" name="userMsg" id="userMsg" className="input"></textarea>
                        </div>
                        <Link to ="/about" id="submitBtn">                            
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Submit
                        </Link>                        
                    </form>
                </div>
            <Footer /> 
        </body>
    );
};

export default Contact;