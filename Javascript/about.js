let timeline = gsap.timeline();
timeline.fromTo("#body",{backgroundImage:"none", opacity:0},{duration:1.5,backgroundImage:"url('/home/lazy_bird/Desktop/Jordan/images/background3.jpg')", opacity:1});
timeline.fromTo(".header-link",{visibility:"hidden", opacity:0}, {duration:2.5,visibility:"visible",opacity:1, stagger:0.30, delay:1});
timeline.fromTo(".main-title",{visibility:"hidden", opacity:0}, {duration:1, opacity:1, visibility:"visible", ease:"power3.out"});
timeline.fromTo("#text, #img", {visibility:"hidden", opacity:0}, {duration:1.5, visibility:"visible", ease:" SlowMo.ease.config(0.7, 0.7, false)", opacity:1});