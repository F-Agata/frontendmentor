import '../../scss/project2/project2.scss';


const burger = document.querySelector(".header__menu-icons");

const iconBurger = document.querySelector(".header__menu-icon--hamburger");
const iconClose = document.querySelector(".header__menu-icon--close");

const menuActiv = document.querySelector(".header__menu-menu");



burger.addEventListener("click", function () {
    iconBurger.classList.toggle("activ");
    iconClose.classList.toggle("activ");
    menuActiv.classList.toggle("show");

})
