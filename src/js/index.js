import './../sass/main.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = ['home', 'portfolio', 'about', 'contact'];
const projects = [{
    title: 'Tempo',
    date: 'July 2020',
    desc: 'Tempo is a website where you can test your typing speed using song lyrics.',
    img: 'tempo.jpg',
    techs: ['js', 'scss', 'html', 'wp']
},
{
    title: 'MoviesBLOG',
    date: 'October - December 2019',
    desc: 'I developed MoviesBlog as the ending project in my highschool. I wrote both frond and back end.',
    img: 'moviesblog.jpg',
    techs: ['js', 'scss', 'html', 'php', 'msql']
},
{
    title: 'pejper Soker',
    date: 'December 2018 - June 2019',
    desc: 'Group project. Game based on a well known time killer Paper Soccer. It contains of singleplayer and multiplayer modes.',
    img: 'pejpersoker.jpg',
    techs: ['js', 'css', 'html', 'php', 'msql']
},
{
    title: 'Pacman',
    date: 'December 2017 - May 2018',
    desc: 'Group project. Developed using p5.js library. Works on canvas.',
    img: 'pacman.jpg',
    techs: ['js', 'css', 'html', 'p5']
}];

let tl = gsap.timeline({ defaults: { duration: 1.5 } });

tl.to('.home__paint', { height: "100%", ease: "power2.out" })
    .from(".home__fig", { opacity: 0, y: -120, ease: "elastic(1, 0.3)" }, "-=1")
    .from(".hero", { opacity: 0, duration: 1.5, y: 40, ease: "elastic(1, 0.3)" }, "-=1.2")
    .from(".home__links", { opacity: 0, duration: 1.5, x: -50, ease: "elastic(1, 0.3)" }, "-=1.3");