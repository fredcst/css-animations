
//menu dev
const menuContent = document.querySelector("#menu-content");
const menuButton = document.querySelector("#nav-icon");
const menuLinks = document.querySelectorAll("#menu-content a");
const brandLogo = document.querySelector("#brand");
const logoImg = document.querySelector("#logo-img");
const cont = document.querySelector("#cont");

menuButton.addEventListener("click", () => { menuContent.classList.toggle("hidden"); menuButton.classList.toggle("open");brandLogo.classList.toggle("hidden");logoImg.classList.toggle("hidden");cont.classList.toggle("hidden2");});
menuLinks.forEach(element => {
    element.addEventListener("click", () => { menuContent.classList.toggle("hidden"); menuButton.classList.toggle("open"); brandLogo.classList.toggle("hidden"); logoImg.classList.toggle("hidden");cont.classList.toggle("hidden2");});
});

//animaciones css

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
});
observer.observe(document.querySelector('.fade-in'));

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer2.unobserve(entry.target);
    }
  });
});

const slideIns2 = document.querySelectorAll('.slide-in-d');
slideIns2.forEach(slideIn => {
  observer2.observe(slideIn);
});

const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer3.unobserve(entry.target);
    }
  });
});

const slideIns3 = document.querySelectorAll('.slide-in-g');
slideIns3.forEach(slideIn => {
  observer3.observe(slideIn);
});

const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer4.unobserve(entry.target);
    }
  });
});

const slideIns4 = document.querySelectorAll('.rotate');
slideIns4.forEach(slideIn => {
  observer4.observe(slideIn);
});

const observer5 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer5.unobserve(entry.target);
    }
  });
});

const slideIns5 = document.querySelectorAll('.scale');
slideIns5.forEach(slideIn => {
  observer5.observe(slideIn);
});