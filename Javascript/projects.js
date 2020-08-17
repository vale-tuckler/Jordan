
const tl = gsap.timeline({delay:1}); 

tl.fromTo(".header-link",{visibility:"hidden", opacity:0},{ duration:1.5, opacity:1, y:"10%", visibility:"visible", stagger:0.30, delay:0.5});
tl.fromTo(".main-title",{visibility:"hidden", opacity:0},{duration:1, opacity:1, visibility:"visible", ease:"power3.out"})
.fromTo("#altamirano, .centered",{visibility:"hidden", opacity:0},{visibility:"visible", opacity:1, duration: 1.8, ease:"slow(0.7, 0.7, false)"});

/*.fromTo(".centered",{visibility:"hidden", opacity:0},{visibility:"visible", opacity:1, duration:1, ease:"slow(0.7, 0.7, false)"});*/