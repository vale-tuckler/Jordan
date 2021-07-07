import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

/* IMPORTS FOR REACT-BOOTSTRAP*/
import { Carousel } from 'react-bootstrap';

/* IMPORTS FOR MINIMALIST LOFT PROJECT */
import minimalistLoft1 from '../imgs/minimalist-loft/minimalist-loft1.png';
import minimalistLoft2 from '../imgs/minimalist-loft/minimalist-loft2.png';
import minimalistLoft3 from '../imgs/minimalist-loft/minimalist-loft3.png';
import minimalistLoft4 from '../imgs/minimalist-loft/minimalist-loft4.png';

/* IMPORTS FOR EFFICIENCY APARTMENT */
import efficiencyApt1 from "../imgs/efficiency-apt/efficiency-apt1.png";
import efficiencyApt2 from "../imgs/efficiency-apt/efficiency-apt2.png";
import efficiencyApt3 from "../imgs/efficiency-apt/efficiency-apt3.png";
import efficiencyApt4 from "../imgs/efficiency-apt/efficiency-apt4.png";

/* CONTAINERS APARTMENT */
import containersApt1 from "../imgs/containers-apt/containers-apt1.png";
import containersApt2 from "../imgs/containers-apt/containers-apt2.png";
import containersApt3 from "../imgs/containers-apt/containers-apt3.png";
import containersApt4 from "../imgs/containers-apt/containers-apt4.png";
import containersApt5 from "../imgs/containers-apt/containers-apt5.png";
import containersApt6 from "../imgs/containers-apt/containers-apt6.png";

import '../styles/projects-info.css';

function ProjectsInfo(){
    return(
        <div id="projectsInfoContainer">
            <Header/>
                    
                    {/*MINIMALIST LOFT*/}

                <Carousel id="minimalistLoft">
                    <Carousel.Item>
                       <div className="imgContainer">
                            <img 
                                src={minimalistLoft1} 
                                alt="Minimalist loft 1" 
                                title="Minimalist loft picture 1"
                                className="d-block projectImg"
                            />
                       </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="imgContainer">
                            <img 
                                src={minimalistLoft2}
                                alt="Minimalist loft 2"
                                title="Minimalist loft picture 2"
                                className="d-block projectImg"
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="imgContainer">
                            <img 
                                src={minimalistLoft3}
                                alt="Minimalist loft 3"
                                title="Minimalist loft picture 3"
                                className="d-block projectImg"
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="imgContainer">
                            <img 
                                src={minimalistLoft4}
                                alt="Minimalist loft 4"
                                title="Minimalist loft picture 4"
                                className="d-block projectImg"
                            />
                        </div>
                    </Carousel.Item>
                </Carousel>
                <div className="projectDescription">
                    <h2 className="projectTitle">What is Lorem Ipsum?</h2>
                    <p className="Text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker 
                        including versions of Lorem Ipsum.
                    </p>
                </div>

                {/* EFFICIENCY APARTMENT*/}

                <Carousel id="efficiencyApt">
                    <Carousel.Item>
                        <div className="imgContainer">
                            <img 
                                src={efficiencyApt1}
                                alt="Efficiency apartment 1"
                                title="Efficiency apartment picture 1"
                                className="d-block projectImg"
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="imgContainer">
                            <img 
                                src={efficiencyApt2}
                                alt="Efficiency apartment 2"
                                title="Efficiency apartment picture 2"
                                className="d-block projectImg"
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="imgContainer">
                            <img 
                                src={efficiencyApt3}
                                alt="Efficiency apartment 3"
                                title="Efficiency apartment picture 3"
                                className="d-block projectImg"
                            />                        
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="imgContainer">
                            <img 
                                src={efficiencyApt4}
                                alt="Efficiency apartment 4"
                                title="Efficiency apartment picture 4"
                                className="d-block projectImg"
                            />
                        </div>
                    </Carousel.Item>
                </Carousel>
                <div className="projectDescription">
                    <h2 className="projectTitle">What is Lorem Ipsum?</h2>
                    <p className="Text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker 
                        including versions of Lorem Ipsum.
                    </p>
                </div>

                {/* CONTAINERS APARTMENT */}

                <Carousel id="containersApt">
                    <Carousel.Item>
                        <div className="imgContainer">
                            <img 
                                src={containersApt1}
                                alt="Containers apartment 1"
                                title="Containers apartment picture 1"
                                className="d-block projectImg"
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="imgContainer">
                            <img 
                                src={containersApt2}
                                alt="Containers apartment 2"
                                title="Containers apartment picture 2"
                                className="d-block projectImg"
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="imgContainer">
                            <img 
                                src={containersApt3}
                                alt="Containers apartment 3"
                                title="Containers apartment picture 3"
                                className="d-block projectImg"
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="imgContainer">
                            <img 
                                src={containersApt4}
                                alt="Containers apartment 4"
                                title="Containers apartment picture 4"
                                className="d-block projectImg"
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="imgContainer">
                            <img 
                                src={containersApt5}
                                alt="Containers apartment 5"
                                title="Containers apartment picture 5"
                                className="d-block projectImg"
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="imgContainer">
                            <img 
                                src={containersApt6}
                                alt="Containers apartment 6"
                                title="Containers apartment picture 6"
                                className="d-block projectImg"
                            />
                        </div>
                    </Carousel.Item>
                </Carousel>
                <div className="projectDescription" id="thirdDescription">
                    <h2 className="projectTitle">What is Lorem Ipsum?</h2>
                    <p className="Text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker 
                        including versions of Lorem Ipsum.
                    </p>
                </div>
            <Footer/>            
        </div>
    ); 
};

export default ProjectsInfo;