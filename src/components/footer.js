import React from "react";
import behance from "../imgs/behance-50.png";
import instagram from "../imgs/instagram-52.png";
import mail from "../imgs/mail-50.png";
import "../styles/footer.css";

function myFooter(){
    return(
        <footer className="footer bg-dark fixed-bottom" id="myfooter" style={{backgroundColor:"grey"}}>
            <div className="text-center container d-flex justify-content-center align-self-center py-3">
                
                <a href="https://www.behance.net/jordantuckler">
                    {/*Button background color = dark*/}
                    <img src={behance} alt="Behance logo" title = "Behance logo" className="btn btn-warning btn-sm btn-floating bg-dark mx-3"/>                    
                </a>    

                <a href="https://www.instagram.com/jordantuckler/">
                    {/*Button background color = dark*/}                    
                    <img src={instagram} alt="Instagram logo"  title="Instagram logo"className="btn btn-warning btn-sm btn-floating bg-dark mx-3" />                    
                </a>                                            

                <a href="mailto:jordantuckler@gmail.com">
                    {/*Background color = dark*/}                    
                    <img src={mail} alt="Mail logo" title="Mail logo" className="btn btn-warning btn-sm btn-foating bg-dark mx-3"/>
                </a>                                
            </div>

            {/* C O P Y R I G H T   L E T T E R S */}
            
            {/*Background color = dark*/}

            <div className="text-center text-white p-1 bg-dark">
                &copy; 2021 Jordan Tuckler
            </div>
        </footer>
    );
};

export default myFooter;