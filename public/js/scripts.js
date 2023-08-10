import slider from "./slider.js";
import carousel from "./carousel.js";

carousel(document.querySelector('main'));

if (window.location.pathname === '/' || window.location.pathname === "/index.html") {
    slider(document.querySelector('.Banner'))
}