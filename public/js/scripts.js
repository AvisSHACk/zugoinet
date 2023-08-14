import slider from "./slider.js";
import carousel from "./carousel.js";
import openCreateList from "./openCreateList.js";

carousel(document.querySelector('main'));

if (window.location.pathname === '/' || window.location.pathname === "/index.html") {
    slider(document.querySelector('.Banner'))
}

if (window.location.pathname === '/mislistas.html') {
    openCreateList(document.querySelector('.add-list'))
}