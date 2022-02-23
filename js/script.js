const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuToggle = $(".header-menu-toggle");
const menu = $(".menu");

menuToggle.addEventListener("click", () => {
    menu.classList.add("active");
});
document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !e.target.matches('.header-menu-toggle')) {
        menu.classList.remove("active");
    }
});
