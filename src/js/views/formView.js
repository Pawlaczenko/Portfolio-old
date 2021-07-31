import { ajax } from './base.js';

var form = document.getElementById("mailform");
var status = document.querySelector(".form__status");

function success() {
    form.reset();
    status.classList.add("form__status--success");
    status.innerHTML = "Thanks you.";
}

function error() {
    status.classList.add("form__status--error");
    status.innerHTML = "Oops! Something went wrong.";
}

export const handleSubmit = e => {
    e.preventDefault();
    let data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
}