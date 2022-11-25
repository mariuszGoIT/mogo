"use strict";

const naviagionElement = document.querySelector(".nav");
const menuButtonElement = document.querySelector(".header__menu-button");
const menuElements = document.querySelectorAll(".nav__link");

menuButtonElement.addEventListener("click", () =>
  naviagionElement.classList.toggle("nav-open")
);

menuElements.forEach((element) => {
  element.addEventListener("click", () =>
    naviagionElement.classList.remove("open-nav")
  );
});
