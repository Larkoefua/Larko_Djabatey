const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


document.querySelectorAll(".nav-menu a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

document.querySelector('.scroll-icon').addEventListener('click', function(e) {
    e.preventDefault();
    const targetSection = document.querySelector('#about');
    targetSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
});