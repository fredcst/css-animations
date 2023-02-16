
//menu dev
const menuContent = document.querySelector("#menu-content");
const menuButton = document.querySelector("#nav-icon");
const menuLinks = document.querySelectorAll("#menu-content a");

menuButton.addEventListener("click", () => { menuContent.classList.toggle("hidden"); menuButton.classList.toggle("open");});
menuLinks.forEach(element => {
    element.addEventListener("click", () => { menuContent.classList.toggle("hidden"); menuButton.classList.toggle("open");});
});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("menu").style.top = "0";
  } else {
    document.getElementById("menu").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}