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

function ProjectsInfo(){
    return(
        <div>
            <Header/>
                    
                    {/*MINIMALIST LOFT*/}

                <Carousel fade id="minimalistLoft">
                    <Carousel.Item>
                        <img 
                            src={minimalistLoft1} 
                            alt="Minimalist loft 1" 
                            title="Minimalist loft picture 1"
                            className="d-block w-75 h-100"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={minimalistLoft2}
                            alt="Minimalist loft 2"
                            title="Minimalist loft picture 2"
                            className="d-block w-75 h-100"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={minimalistLoft3}
                            alt="Minimalist loft 3"
                            title="Minimalist loft picture 3"
                            className="d-block w-75 h-100"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={minimalistLoft4}
                            alt="Minimalist loft 4"
                            title="Minimalist loft picture 4"
                            className="d-block w-75 h-100"
                        />
                    </Carousel.Item>
                </Carousel>

                {/* EFFICIENCY APARTMENT*/}

                <Carousel fade id="efficiencyApt">
                    <Carousel.Item>
                        <img 
                            src={efficiencyApt1}
                            alt="Efficiency apartment 1"
                            title="Efficiency apartment picture 1"
                            className="d-block w-75 h-100"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={efficiencyApt2}
                            alt="Efficiency apartment 2"
                            title="Efficiency apartment picture 2"
                            className="d-block w-75 h-100"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={efficiencyApt3}
                            alt="Efficiency apartment 3"
                            title="Efficiency apartment picture 3"
                            className="d-block w-75 h-100"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={efficiencyApt4}
                            alt="Efficiency apartment 4"
                            title="Efficiency apartment picture 4"
                            className="d-block w-75 h-100"
                        />
                    </Carousel.Item>
                </Carousel>

                {/* CONTAINERS APARTMENT */}

                <Carousel fade id="containersApt">
                    <Carousel.Item>
                        <img 
                            src={containersApt1}
                            alt="Containers apartment 1"
                            title="Containers apartment picture 1"
                            className="d-block w-75 h-100"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={containersApt2}
                            alt="Containers apartment 2"
                            title="Containers apartment picture 2"
                            className="d-block w-75 h-100"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={containersApt3}
                            alt="Containers apartment 3"
                            title="Containers apartment picture 3"
                            className="d-block w-75 h-100"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={containersApt4}
                            alt="Containers apartment 4"
                            title="Containers apartment picture 4"
                            className="d-block w-75 h-100"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={containersApt5}
                            alt="Containers apartment 5"
                            title="Containers apartment picture 5"
                            className="d-block w-75 h-100"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={containersApt6}
                            alt="Containers apartment 6"
                            title="Containers apartment picture 6"
                            className="d-block w-75 h-100"
                        />
                    </Carousel.Item>
                </Carousel>
            <Footer/>
        </div>
    ); 
};

export default ProjectsInfo;