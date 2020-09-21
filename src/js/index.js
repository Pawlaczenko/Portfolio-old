import './../sass/main.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { projects } from './views/base.js';
import * as portfolioView from "./views/portfolioView.js";


// portfolioView.renderProjects(projects
projects.forEach(e => portfolioView.renderProjects(e));

let tl = gsap.timeline({ defaults: { duration: 1.5 } });

tl.to('.home__paint', { height: "100%", ease: "power2.out" })
    .from(".home__fig", { opacity: 0, y: -120, ease: "elastic(1, 0.3)" }, "-=1")
    .from(".hero", { opacity: 0, duration: 1.5, y: 40, ease: "elastic(1, 0.3)" }, "-=1.2")
    .from(".home__links", { opacity: 0, duration: 1.5, x: -50, ease: "elastic(1, 0.3)" }, "-=1.3");