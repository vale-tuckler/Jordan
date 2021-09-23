import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

/* IMPORTS FOR REACT-BOOTSTRAP*/
import { Carousel } from 'react-bootstrap';

/*  IMPORTS FOR GSAP  */
import { gsap } from 'gsap';

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
    function infoAnimations(){
        let infoTimeline = gsap.timeline({delay:1});

        infoTimeline
            .fromTo("#projectsInfoContainer",
                    {visibility:"hidden",},
                    {visibility:"visible", ease:"power4.in", duration:1.3})
            .fromTo(".projectImg",
                    {opacity:0},
                    {opacity:1, 
                        visibility:"visible",
                        ease:"power4.in",
                        duration:1
                    })
            .fromTo(".projectDescription", 
                    {opacity:0}, 
                    {opacity:1, 
                        visibility:"visible", 
                        ease:"power2.in",                         
                        duration:1
                    });
            return infoTimeline;
    };

    useEffect(() => {
        infoAnimations();
    });
    return(
        <div id="projectsInfoContainer">
            <Header/>
                    
                    {/*MINIMALIST LOFT*/}

                <Carousel variant="dark" id="minimalistLoft" fade nextLabel={false} prevLabel={false}>
                    <Carousel.Item>
                            <img 
                                src={minimalistLoft1} 
                                alt="Minimalist loft 1" 
                                title="Minimalist loft picture 1"
                                className="d-block projectImg"
                            />
                    </Carousel.Item>
                    <Carousel.Item>
                            <img 
                                src={minimalistLoft2}
                                alt="Minimalist loft 2"
                                title="Minimalist loft picture 2"
                                className="d-block projectImg"
                            />                   
                    </Carousel.Item>
                    <Carousel.Item>
                            <img 
                                src={minimalistLoft3}
                                alt="Minimalist loft 3"
                                title="Minimalist loft picture 3"
                                className="d-block projectImg"
                            />                   
                    </Carousel.Item>
                    <Carousel.Item>
                            <img 
                                src={minimalistLoft4}
                                alt="Minimalist loft 4"
                                title="Minimalist loft picture 4"
                                className="d-block projectImg"
                            />                   
                    </Carousel.Item>
                </Carousel>
                <div className="projectDescription">
                    <h2 className="projectTitle">Minimalist Industrial Loft Project Description</h2>
                    <div className="textContainer">
                        <p className="Text">
                            A modern architectural design that takes minimalism as its central 
                            philosophy.                    
                        </p>
                        <p className="Text">
                            Marked by clarity, purpose, and intentionality, this project keeps the 
                            most valuable things in an apartment 
                            and removes everything that doesn't align with them,
                            resulting in a contemporary-looking and
                            comfortabe place to live that never loses its original identity and core principles.

                        </p>
                    </div>                    
                </div>

                {/* EFFICIENCY APARTMENT*/}

                <Carousel variant ="dark" id="efficiencyApt" fade nextLabel={false} prevLabel={false}>
                    <Carousel.Item>
                            <img 
                                src={efficiencyApt1}
                                alt="Efficiency apartment 1"
                                title="Efficiency apartment picture 1"
                                className="d-block projectImg"
                            />                   
                    </Carousel.Item>
                    <Carousel.Item>
                            <img 
                                src={efficiencyApt2}
                                alt="Efficiency apartment 2"
                                title="Efficiency apartment picture 2"
                                className="d-block projectImg"
                            />
                    </Carousel.Item>
                    <Carousel.Item>
                            <img 
                                src={efficiencyApt3}
                                alt="Efficiency apartment 3"
                                title="Efficiency apartment picture 3"
                                className="d-block projectImg"
                            />                        
                    </Carousel.Item>
                    <Carousel.Item>
                            <img 
                                src={efficiencyApt4}
                                alt="Efficiency apartment 4"
                                title="Efficiency apartment picture 4"
                                className="d-block projectImg"
                            />
                    </Carousel.Item>
                </Carousel>
                <div className="projectDescription">
                    <h2 className="projectTitle">Efficiency Apartment Project Description</h2>
                    <div className="textContainer">
                        <p className="Text">
                            A design made taking into consideration the usual energy demands of an 
                            apartment to make it energy and resource efficient by allocating the most
                            essential needs of the apartment in a single room.
                        </p>
                    </div>
                </div>

                {/* CONTAINERS APARTMENT */}

                <Carousel variant='dark' id="containersApt" fade nextLabel={false} prevLabel={false}>
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
                            <img 
                                src={containersApt3}
                                alt="Containers apartment 3"
                                title="Containers apartment picture 3"
                                className="d-block projectImg"
                            />
                    </Carousel.Item>
                    <Carousel.Item>
                            <img 
                                src={containersApt4}
                                alt="Containers apartment 4"
                                title="Containers apartment picture 4"
                                className="d-block projectImg"
                            />
                    </Carousel.Item>
                    <Carousel.Item>
                            <img 
                                src={containersApt5}
                                alt="Containers apartment 5"
                                title="Containers apartment picture 5"
                                className="d-block projectImg"
                            />
                    </Carousel.Item>
                    <Carousel.Item>
                            <img 
                                src={containersApt6}
                                alt="Containers apartment 6"
                                title="Containers apartment picture 6"
                                className="d-block projectImg"
                            />
                    </Carousel.Item>
                </Carousel>
                <div className="projectDescription" id="thirdDescription">
                    <h2 className="projectTitle">Containers Apartment Project Description</h2>
                    <div className="textContainer">
                        <p className="Text">
                            This design was made around the principle of recycling. Recycling can bring 
                            new life to old products at an affordable price which makes it all the more
                            accessible to most people, creating this way an eco-friendly cycle of 
                            planning and construction.
                        </p>
                    </div>
                </div>
            <Footer/>            
        </div>
    ); 
};

export default ProjectsInfo;