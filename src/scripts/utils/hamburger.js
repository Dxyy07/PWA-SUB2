const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('menu-list');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle("hidden");
});


document.querySelectorAll("ul").forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove("hidden");
}));