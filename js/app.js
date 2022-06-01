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

const userIcon = document.getElementById("user");
const loginForm = document.getElementById("login");
const registerForm = document.getElementById("register");
const removeLoginForm = document.querySelector(".close-login-form");
const removeRegisterForm = document.querySelector(".close-register-form");

const loginLink = document.getElementById("login-link");
const formBlocks = document.querySelectorAll(".form-block");
const registerLink = document.getElementById("register-link");
const formWrapper = document.querySelectorAll(".form-wrapper");

const navbarItemList1 = document.querySelector(".js-navbar-list-1");
const navbarItemList2 = document.querySelector(".js-navbar-list-2");
const navbarItemList3 = document.querySelector(".js-navbar-list-3");

const navbarItemProp1 = document.querySelector(".navbar-item__prop-1");
const navbarItemProp2 = document.querySelector(".navbar-item__prop-2");
const navbarItemProp3 = document.querySelector(".navbar-item__prop-3");
const navbarItemProps = document.querySelectorAll(".navbar-item__prop");
const closenavbarItemProps = document.querySelector(".open-props-menu");

const openMenu = document.querySelector(".js-left-menu");
const navbarLeftMenu = document.querySelector(".navbar-left__menu");
const closeMenu = document.querySelector(".exit-icon");

// Open left menu
function openLeftMenu() {
    navbarLeftMenu.classList.add("open-left-menu");

    // Set display for menu props to none
    navbarItemProps.forEach((navbarItemProp) => {
        navbarItemProp.style.display = "none";
    });
}

// Close left menu
function closeLeftMenu() {
    navbarLeftMenu.classList.remove("open-left-menu");
}

openMenu.onclick = () => openLeftMenu();
closeMenu.onclick = () => closeLeftMenu();

// Show form while click user icon
function showForm() {
    registerForm.classList.add("open-form");
}

userIcon.addEventListener("click", showForm);

// Open login & register form
function showLoginForm() {
    loginForm.classList.add("open-form");
    registerForm.classList.remove("open-form");
}

function showRegisterForm() {
    loginForm.classList.remove("open-form");
    registerForm.classList.add("open-form");
}

loginLink.addEventListener("click", showLoginForm);
registerLink.addEventListener("click", showRegisterForm);

// Close login or register form
function closeRegisterForm() {
    registerForm.classList.remove("open-form");
}

function closeLoginForm() {
    loginForm.classList.remove("open-form");
}

removeLoginForm.addEventListener("click", closeLoginForm);
removeRegisterForm.addEventListener("click", closeRegisterForm);

// Fix issue close form by click in form
formWrapper.forEach((formWrapper) => {
    formWrapper.onclick = (e) => {
        e.stopPropagation();
    };
});

// Close form by click out the form
formBlocks.forEach((formBlock) => {
    formBlock.onclick = () => {
        closeRegisterForm();
        closeLoginForm();
    };
});

// Set display for menu props to none
// navbarItemProps.forEach((navbarItemProp) => {
//     navbarItemProp.style.display = "none";
// });

// Show menu props
function showPropMenu1() {
    navbarItemList1.classList.toggle("mb-80");
    navbarItemProp1.classList.toggle("open-props-menu");
    navbarItemProp1.onclick = (e) => {
        e.stopPropagation();
    };
}

function showPropMenu2() {
    navbarItemList2.classList.toggle("mb-80");
    navbarItemProp2.classList.toggle("open-props-menu");
    navbarItemProp2.onclick = (e) => {
        e.stopPropagation();
    };
}

function showPropMenu3() {
    navbarItemList3.classList.toggle("mb-80");
    navbarItemProp3.classList.toggle("open-props-menu");
    navbarItemProp3.onclick = (e) => {
        e.stopPropagation();
    };
}

// Show props menu of navbar2 while click
navbarItemList1.addEventListener("click", showPropMenu1);
navbarItemList2.addEventListener("click", showPropMenu2);
navbarItemList3.addEventListener("click", showPropMenu3);
