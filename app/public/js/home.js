// =========================================================
// HOME | MENU MOBILE
// =========================================================

const menuButton = document.querySelector(".home-mobile-menu");
const nav = document.querySelector(".home-nav");
const headerActions = document.querySelector(".home-header-actions");

if (menuButton && nav && headerActions) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("home-nav-active");
        headerActions.classList.toggle("home-actions-active");

    });

}


// =========================================================
// HOME | MODO CLARO / ESCURO
// =========================================================

const lightButton = document.querySelector(".home-theme-light");
const darkButton = document.querySelector(".home-theme-dark");

if (lightButton) {

    lightButton.addEventListener("click", () => {

        document.body.classList.add("home-light-mode");

    });

}


if (darkButton) {

    darkButton.addEventListener("click", () => {

        document.body.classList.remove("home-light-mode");

    });

}