const navbar = document.querySelector(".flex-container");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-shadow");
  } else {
    navbar.classList.remove("navbar-shadow");
  }
});

window.addEventListener("scroll", () => {
  const scrollIndicator = document.getElementById("scrollIndicator");
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollIndicator.style.height = scrollPercent + "%";
});
