
//menu dev
const menuContent = document.querySelector("#menu-content");
const menuButton = document.querySelector("#nav-icon");
const menuLinks = document.querySelectorAll("#menu-content a");

menuButton.addEventListener("click", () => { menuContent.classList.toggle("hidden");});
menuLinks.forEach(element => {
    element.addEventListener("click", () => { menuContent.classList.toggle("hidden"); });
});

menuButton.addEventListener("click", () => { menuButton.classList.toggle("open");});