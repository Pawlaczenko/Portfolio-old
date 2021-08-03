export const HREFS = {
    github: "https://github.com/Pawlaczenko/",
    githubPages: "https://pawlaczenko.github.io/",
    facebook: "https://www.facebook.com/bartek.pawlak.754"
}

export const sections = ['home', 'portfolio', 'about', 'contact'];
export const projects = [
    {
        title: 'Tempo',
        date: 'July 2020',
        desc: 'Tempo is a website where you can test your typing speed using song lyrics. I developed it to test my abilities in JavaScript. It uses the external API with song lyrics.',
        img: 'tempo.jpg',
        techs: ['JavaScript', 'SCSS', 'HTML', 'Webpack'],
        liveLink: "Tempo-ghp",
        gitLink: "Tempo"
    },
    {
        title: 'Earthly',
        date: 'April 2021',
        desc: 'Earthly is a simple one-page website made as a final project for the first semester at my university. To develop it I used plain HTML + CSS + JavaScript workflow.',
        img: 'earthly.jpg',
        techs: ['JavaScript', 'CSS', 'HTML'],
        liveLink: "Earthly",
        gitLink: "Earthly"
    },
    {
        title: 'MoviesBLOG',
        date: 'October - December 2019',
        desc: "I developed MoviesBlog as the final project in my high school. I wrote both front and back end. This was made mainly to test my PHP and SQL knowledge. It's a website where you can add and manage posts.",
        img: 'moviesblog.jpg',
        techs: ['JavaScript', 'SCSS', 'HTML', 'PHP', 'MySQL'],
        liveLink: "-1",
        gitLink: "moviesBlog"
    },
    {
        title: 'pejper Soker',
        date: 'December 2018 - June 2019',
        desc: 'Group project. The game is based on a well-known time killer Paper Soccer. Making this project was a great opportunity for me and my colleagues to learn the Git workflow. You play against the bot called Shrek. Your goal is to score a goal.',
        img: 'pejpersoker.jpg',
        techs: ['JavaScript', 'CSS', 'HTML', 'PHP', 'MySQL'],
        liveLink: "PejperSoker/",
        gitLink: "PejperSoker"
    },
    {
        title: 'Pacman',
        date: 'December 2017 - May 2018',
        desc: 'Group project. Developed using p5.js library. It is our take on a popular game Pacman.',
        img: 'pacman.jpg',
        techs: ['JavaScript', 'SCSS', 'HTML', 'p5.js'],
        liveLink: "PacMan",
        gitLink: "PacMan"
    }];

export const ajax = (method, url, data, success, error) => {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}