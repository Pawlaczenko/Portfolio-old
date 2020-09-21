import { HREFS } from './base.js';

const renderTechnologies = techs => {
    let markup = '';

    techs.forEach((e, i) => {
        markup += `<li class="tech-list__item tech-list__item--yellow">${e}</li>`;
    });

    return markup;
}

export const renderProjects = project => {
    const projectsContainer = document.querySelector(".portfolio__content");

    const template = `
    <div class="portfolio__item project">
        <figure class="project__figure">
            <img src="./assets/img/${project.img}" alt="${project.title}" class="project__img">
        </figure>
        <div class="project__info">
            <h3 class="project__header">
                ${project.title}
                <span class="project__date">${project.date}</span>
            </h3>
            <p class="project__desc">${project.desc}</p>
            <ul class="project__techs tech-list">
                ${renderTechnologies(project.techs)}
            </ul>
            <div class="project__buttons">
                <a href="${HREFS.portfolio}${project.liveLink}" class="project__button" target="_blank">
                    <svg class="project__icon">
                        <use xlink:href="./assets/img/_sprite.svg#icon-play"></use>
                    </svg>
                    <span class="project__link">live</span>
                </a>
                <a href="${HREFS.github}${project.gitLink}" class="project__button" target="_blank">
                    <svg class="project__icon">
                        <use xlink:href="./assets/img/_sprite.svg#icon-github"></use>
                    </svg>
                    <span class="project__link">github</span>
                </a>
            </div>
        </div>
    </div>
    `;

    projectsContainer.insertAdjacentHTML('beforeend', template);
}