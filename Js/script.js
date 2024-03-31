"use strict"

const navbarButtons = document.querySelectorAll('[data-btn-nav]'),
    navbarEle = document.querySelector(".navbar"),
    overlayEle = document.querySelector(".overlay");
      
for (const button of navbarButtons) {
    button.addEventListener("click", () => {
        navbarEle.classList.toggle("active");
        overlayEle.classList.toggle("active");
    })
}

const dropDownButton = document.querySelector(".drop-down-ptn"),
    subMenuDiv = document.querySelector(".sub-menu");

dropDownButton.addEventListener("click", (e) => {
    e.preventDefault()
    subMenuDiv.classList.toggle("show")
})