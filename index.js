const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const close = document.querySelector(".close");

hamburger.addEventListener("click", () => {
    hamburgerMenu.style.display = "block";
})

close.addEventListener("click", () => {
    hamburgerMenu.style.display = "none";
})