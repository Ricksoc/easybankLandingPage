const btnhamburger = document.querySelector("#btnhamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const fades = document.querySelectorAll(".fade");

btnhamburger.addEventListener("click", (e) => {
  console.log("hamburger clicked");

  header.classList.toggle("open");

  if (header.classList.contains("open")) {
    // open Hamburger menu
    body.classList.add("noscroll");
    fades.forEach((obj) => {
      obj.classList.remove("fade-out");
      obj.classList.add("fade-in");
    });
  } else {
    // Close Hamburger menu
    body.classList.remove("noscroll");
    fades.forEach((obj) => {
      obj.classList.remove("fade-in");
      obj.classList.add("fade-out");
    });
  }
});
