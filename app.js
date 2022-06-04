// Setup date 
const date = (document.getElementById("date").innerHTML = new Date().getFullYear());

// Setup nav 
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

// Show nav 
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});

// Close nav 
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
