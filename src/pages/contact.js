import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/contact.css';

export default class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={name:"", email:"", message:""}

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMsg = this.onChangeMsg.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeName(event){
        this.setState({name: event.target.value});
    };

    onChangeEmail(event){
        this.setState({email: event.target.value});
    };

    onChangeMsg(event){
        this.setState({message:event.target.value});
    };

    onSubmit(e){
        /*e.preventDefault();*/

        const Message = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };

        Axios.post("http://localhost:4020/send", Message)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };
    render(){
        return(
            <div>
                <Header/>
                    <div className="formContainer">
                        <h2>
                            Send a message <span role="img">⚡️</span>
                        </h2>
                        <form onSubmit={this.onSubmit}>
                            <div className="user-box">
                                <label htmlFor="userName">Name:</label>
                                <input  
                                    name="userName" 
                                    id="userName" 
                                    className="input"
                                    onChange={this.onChangeName}
                                />                            
                            </div>
                            <div className="user-box">
                                <label htmlFor="userEmail">Email:</label>
                                <input  
                                    name="userEmail" 
                                    id="userEmail" 
                                    className="input"
                                    onChange={this.onChangeEmail}
                                />                            
                            </div>
                            <div className="user-box">
                                <label htmlFor="userMsg">Message:</label>
                                <textarea 
                                    name="userMsg" 
                                    id="userMsg" 
                                    className="input"
                                    onChange={this.onChangeMsg}
                                >
                                </textarea>
                            </div>
                            <button type="submit" id="submitBtn">                            
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Submit
                            </button>                        
                        </form>
                    </div>
                <Footer />            
            </div>
        );
    }
}