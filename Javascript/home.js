let tl = gsap.timeline({delay:1});
tl.to("#center",1.5,{visibility:"visible", y:"30%", ease: "elastic.out(1, 0.4)", delay:0.8});
tl.fromTo("#home-phrase",{duration:1.5,visibility:"hidden", xPercent:-20},{visibility:"visible", xPercent:2, ease:"expo.out"});
tl.fromTo(".header-link",{visibility:"hidden", opacity:0},{duration:2.5,visibility:"visible",opacity:1, y:"10%", stagger:0.30, delay:1});
