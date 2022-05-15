"use strict";

const body = document.querySelector("body");
const leftMenu = document.querySelector(".js-modal");
const menuBtn = document.querySelector(".js-left-menu");

const leftMenuArrow1 = document.querySelector(".js-navbar-menu__icon-res-1");
const leftMenuArrow2 = document.querySelector(".js-navbar-menu__icon-res-2");
const leftMenuArrow3 = document.querySelector(".js-navbar-menu__icon-res-3");

const leftMenuProperty1 = document.querySelector(".js-navbar-item__detail-1");
const leftMenuProperty2 = document.querySelector(".js-navbar-item__detail-2");
const leftMenuProperty3 = document.querySelector(".js-navbar-item__detail-3");

const active = document.querySelector(".active");
const searchIcon = document.querySelector(".fa-search");
const searchBar = document.querySelector(".navbar-search");
const input = document.querySelector(".search-bar");
const show = document.querySelector(".show-search-bar");

// searchIcon.onclick = () => {
//     searchBar.classList.toggle("active");
// };

function showMenu() {
    leftMenu.classList.add("open");
}

function hideMenu() {
    leftMenu.classList.remove("open");
    leftMenuProperty1.classList.remove("prop");
    leftMenuProperty2.classList.remove("prop");
    leftMenuProperty3.classList.remove("prop");
}

function showDropDown1() {
    leftMenuProperty1.classList.toggle("prop");
}

function showDropDown2() {
    leftMenuProperty2.classList.toggle("prop");
}

function showDropDown3() {
    leftMenuProperty3.classList.toggle("prop");
}

body.addEventListener("click", hideMenu);

menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    showMenu();
});

leftMenu.addEventListener("click", (e) => {
    e.stopPropagation();
});

leftMenuArrow1.addEventListener("click", showDropDown1);
leftMenuArrow2.addEventListener("click", showDropDown2);
leftMenuArrow3.addEventListener("click", showDropDown3);
