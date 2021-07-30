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

// get the form elements defined in your form HTML above

var form = document.getElementById("mailform");
var status = document.querySelector(".form__status");

// Success and Error functions for after the form is submitted

function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
}

function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
}

// handle the form submission event

form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
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
