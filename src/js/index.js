import './../sass/main.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { projects } from './views/base.js';
import * as portfolioView from "./views/portfolioView.js";


//Render Portfolio projects
projects.forEach(e => portfolioView.renderProjects(e));

// Home Animation
let tl = gsap.timeline({ defaults: { duration: 1.5 } });

tl.to('.home__paint', { height: "100%", ease: "power2.out" })
    .from(".home__fig", { opacity: 0, y: -120, ease: "elastic(1, 0.3)" }, "-=1")
    .from(".hero", { opacity: 0, duration: 1.5, y: 40, ease: "elastic(1, 0.3)" }, "-=1.2")
    .from(".home__links", { opacity: 0, duration: 1.5, x: -50, ease: "elastic(1, 0.3)" }, "-=1.3");


//Portfolio Animation

gsap.from(".portfolio__header", {
    x: -50, opacity: 0, ease: "elastic(1, 0.3)", duration: 1.5, scrollTrigger: {
        trigger: '.portfolio',
        start: "top 80%"
    }
});

gsap.fromTo(".portfolio", { backgroundSize: "4%" }, {
    backgroundSize: "60%", duration: 1, ease: "easeIn", scrollTrigger: {
        trigger: ".portfolio",
        start: "5px bottom",
        scrub: 1
    }
})

const projectsMrkp = document.querySelectorAll('.project');
projectsMrkp.forEach(e => {
    gsap.from(e, {
        y: -100, opacity: 0, ease: "elastic(1, 0.3)", duration: 1.5, scrollTrigger: {
            trigger: e,
            start: "-10% center"
        }
    })
});

// About Me Animation

let aboutTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        start: "top 70%"
    }
});

const aboutInfo = document.querySelector(".about__info");

aboutTl.from(".about__picture", { borderWidth: "0", ease: "easeOut", duration: 1 })
    .from(".about__header", { x: 50, opacity: 0, ease: "elastic(1, 0.3)", duration: 1.5 }, "-=.7")
    .from(aboutInfo.children, { opacity: 0, x: 40, ease: "elastic(1, 0.3)", duration: 1.5, stagger: .25 }, "-=1.2")
    .from(".about", { backgroundPosition: "120%", ease: "ease", duration: "1.5" }, "-=1.2")
    .from(".about__lists", { y: 10, opacity: 0, ease: "easeInOut", duration: 1 }, "-=.8");
