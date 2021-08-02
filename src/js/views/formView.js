import { ajax } from './base.js';

var form = document.getElementById("mailform");
var status = document.querySelector(".form__status");

function success() {
    form.reset();
    form.classList.toggle('loader');
    status.classList.add("form__status--success");
    status.innerHTML = "Thanks you.";
}

function error() {
    form.classList.toggle('loader');
    status.classList.add("form__status--error");
    status.innerHTML = "Oops! Something went wrong.";
}

function loadTheForm() {

}

export const handleSubmit = e => {
    e.preventDefault();
    form.classList.toggle('loader');
    let data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
}