import './../sass/main.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = ['home', 'portfolio', 'about', 'contact'];

gsap.to('.home__paint', {
    height: "100%",
    duration: 1.5,
    ease: "power2.out"
});

gsap.from(".home__fig", {
    opacity: 0,
    duration: 1.5,
    y: -120,
    ease: "elastic(1, 0.3)",
    delay: .5
});

gsap.from(".hero", {
    opacity: 0,
    duration: 1.5,
    y: 40,
    ease: "elastic(1, 0.3)",
    delay: .8
});

gsap.from(".home__links", {
    opacity: 0,
    duration: 1.5,
    x: -50,
    ease: "elastic(1, 0.3)",
    delay: 1
});