// "use strict";

// const body = document.querySelector("body");
// const leftMenu = document.querySelector(".js-modal");
// const menuBtn = document.querySelector(".js-left-menu");

// const leftMenuArrow1 = document.querySelector(".js-navbar-menu__icon-res-1");
// const leftMenuArrow2 = document.querySelector(".js-navbar-menu__icon-res-2");
// const leftMenuArrow3 = document.querySelector(".js-navbar-menu__icon-res-3");

// const leftMenuProperty1 = document.querySelector(".js-navbar-item__detail-1");
// const leftMenuProperty2 = document.querySelector(".js-navbar-item__detail-2");
// const leftMenuProperty3 = document.querySelector(".js-navbar-item__detail-3");

// const active = document.querySelector(".active");
// const searchIcon = document.querySelector(".fa-search");
// const searchBar = document.querySelector(".navbar-search");
// const input = document.querySelector(".search-bar");
// const show = document.querySelector(".show-search-bar");

// searchIcon.onclick = () => {
//     searchBar.classList.toggle("active");
// };

// function showMenu() {
//     leftMenu.classList.add("open");
// }

// function hideMenu() {
//     leftMenu.classList.remove("open");
//     leftMenuProperty1.classList.remove("prop");
//     leftMenuProperty2.classList.remove("prop");
//     leftMenuProperty3.classList.remove("prop");
// }

// function showDropDown1() {
//     leftMenuProperty1.classList.toggle("prop");
// }

// function showDropDown2() {
//     leftMenuProperty2.classList.toggle("prop");
// }

// function showDropDown3() {
//     leftMenuProperty3.classList.toggle("prop");
// }

// body.addEventListener("click", hideMenu);

// menuBtn.addEventListener("click", (e) => {
//     e.stopPropagation();
//     showMenu();
// });

// leftMenu.addEventListener("click", (e) => {
//     e.stopPropagation();
// });

// leftMenuArrow1.addEventListener("click", showDropDown1);
// leftMenuArrow2.addEventListener("click", showDropDown2);
// leftMenuArrow3.addEventListener("click", showDropDown3);

("use strict");

const user = document.getElementById("user");
const loginForm = document.getElementById("login");
const registerForm = document.getElementById("register");
const removeLoginForm = document.querySelector(".close-login-form");
const removeRegisterForm = document.querySelector(".close-register-form");

const loginLink = document.getElementById("login-link");
const registerLink = document.getElementById("register-link");
const formBlocks = document.querySelectorAll(".form-block");
const formWrapper = document.querySelectorAll(".form-wrapper");

function showForm() {
    registerForm.classList.add("open-form");
}

function showLoginForm() {
    loginForm.classList.add("open-form");
    registerForm.classList.remove("open-form");
}

function showRegisterForm() {
    loginForm.classList.remove("open-form");
    registerForm.classList.add("open-form");
}

function closeRegisterForm() {
    registerForm.classList.remove("open-form");
}

function closeLoginForm() {
    loginForm.classList.remove("open-form");
}

user.addEventListener("click", showForm);

loginLink.addEventListener("click", showLoginForm);
registerLink.addEventListener("click", showRegisterForm);

removeLoginForm.addEventListener("click", closeLoginForm);
removeRegisterForm.addEventListener("click", closeRegisterForm);

formWrapper.forEach((formWrapper) => {
    formWrapper.onclick = (e) => {
        e.stopPropagation();
    };
});

formBlocks.forEach((formBlock) => {
    formBlock.onclick = () => {
        closeRegisterForm();
        closeLoginForm();
    };
});