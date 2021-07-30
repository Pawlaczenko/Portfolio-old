import './../sass/main.scss';

import { projects } from './views/base.js';
import * as portfolioView from "./views/portfolioView.js";
import * as navigationView from "./views/navigationView.js";
import { initAnimations } from './views/animations.js';

window.addEventListener('scroll', () => {
    navigationView.stickyBar(window.scrollY);
});

//Render Portfolio projects
projects.forEach(e => portfolioView.renderProjects(e));

initAnimations();