import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
// import './utils/fetch.js';
import './utils/hamburger.js';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
    button: document.querySelector('#hamburger'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
});

document.getElementById("tombol").addEventListener("click", function () {
    window.location.href = "#content";
});


window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});