export const HREFS = {
    portfolio: "http://moje-portfolio.pl/bartlomiej_pawlak/",
    github: "https://github.com/Pawlaczenko/",
    githubPages: "https://pawlaczenko.github.io/"
}

export const sections = ['home', 'portfolio', 'about', 'contact'];
export const projects = [{
    title: 'Tempo',
    date: 'July 2020',
    desc: 'Tempo is a website where you can test your typing speed using song lyrics.',
    img: 'tempo.jpg',
    techs: ['JavaScript', 'SCSS', 'HTML', 'Webpack'],
    liveLink: "Tempo-ghp",
    gitLink: "Tempo"
},
{
    title: 'MoviesBLOG',
    date: 'October - December 2019',
    desc: 'I developed MoviesBlog as the ending project in my highschool. I wrote both frond and back end.',
    img: 'moviesblog.jpg',
    techs: ['JavaScript', 'SCSS', 'HTML', 'PHP', 'MySQL'],
    liveLink: "moviesBlog",
    gitLink: "moviesBlog"
},
{
    title: 'pejper Soker',
    date: 'December 2018 - June 2019',
    desc: 'Group project. Game based on a well known time killer Paper Soccer. It contains of singleplayer and multiplayer modes.',
    img: 'pejpersoker.jpg',
    techs: ['JavaScript', 'CSS', 'HTML', 'PHP', 'MySQL'],
    liveLink: "pejper_soker/index.html",
    gitLink: "PejperSoker"
},
{
    title: 'Pacman',
    date: 'December 2017 - May 2018',
    desc: 'Group project. Developed using p5.js library. Works on canvas.',
    img: 'pacman.jpg',
    techs: ['JavaScript', 'SCSS', 'HTML', 'p5.js'],
    liveLink: "pacman",
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