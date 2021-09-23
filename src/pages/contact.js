import React from 'react';
import { gsap } from 'gsap';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/contact.css';

export default class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {name:"", email:"", message:""}        
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMsg = this.onChangeMsg.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.contactAnimations = this.contactAnimations.bind(this);
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

        const Message = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };

        Axios.post("http://localhost:4020/send", Message)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };


    contactAnimations(){
        let contact = gsap.timeline({delay:0.5});

        contact            
            .fromTo("#contact", 
                    {opacity:0},
                    {opacity:1, visibility:"visible", ease:"power2.out", duration:1})
            .fromTo("#contactTitle",
                    {opacity:0, visibility:"hidden"},
                    {opacity:1, visibility:"visible", duration:1, ease:"circ.out"})
            .fromTo("#form",
                    {opacity:0, visibility:"hidden"},
                    {opacity:1, visibility:"visible", duration:1.2, ease:"circ.out"})

        
        return contact;
    };

    componentDidMount(){
        this.contactAnimations();
    }
    render(){        
        return(
            <div id="contact">
                <Header/>
                    <h1 id="contactTitle">Get in touch!</h1>
                       <Form id="form" onSubmit={this.onSubmit}>
                           <Form.Group className="mb-3 w-50 formGroup" controlId="name">                                
                                <Form.Control 
                                    type="text" 
                                    placeholder="Write your name here..." 
                                    className="d-flex justify-content-center formControl"
                                    onChange={this.onChangeName}
                                />
                           </Form.Group>    
                           <Form.Group className="mb-3 w-50 formGroup" controlId="email">
                                {/*<Form.Label className="label">Email</Form.Label>*/}
                                <Form.Control 
                                    type="email" 
                                    placeholder="Write your email here..."
                                    className="formControl"
                                    onChange={this.onChangeEmail}
                                />
                           </Form.Group>
                           <Form.Group className="mb-3 w-50 formGroup" controlId="message">
                                {/*<Form.Label className="label">Message</Form.Label>*/}
                                <Form.Control as="textarea" 
                                    rows={4} 
                                    placeholder="Send a message!"
                                    className="formControl"
                                    onChange={this.onChangeMsg}
                                />
                           </Form.Group>
                           {/* Form label*/}
                        <div className="d-flex mb-2 justify-content-center submit-btn">
                            <Button 
                                variant = "outline-warning"
                                as = "input"
                                type = "submit"                                
                                value = "Submit"
                                lg={2}
                                rows={3}                                
                            />                                                                  
                        </div>
                       </Form>

                <Footer />            
            </div>
        );
    }
}