const btnhamburger = document.querySelector("#btnhamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const fadesIns = document.querySelectorAll(".fade");
const fadeOuts = document.querySelectorAll(".outFade");

btnhamburger.addEventListener("click", (e) => {
  console.log("hamburger clicked");

  header.classList.toggle("open");

  if (header.classList.contains("open")) {
    // open Hamburger menu
    body.classList.add("noscroll");
    fadesIns.forEach((obj) => {
      obj.classList.remove("fade-out");
      obj.classList.add("fade-in");
    });

    fadeOuts.forEach((obj) => {
      obj.classList.remove("fade-in");
      obj.classList.add("fade-out");
    });
  } else {
    // Close Hamburger menu
    body.classList.remove("noscroll");
    fadesIns.forEach((obj) => {
      obj.classList.remove("fade-in");
      obj.classList.add("fade-out");
    })
    
    fadeOuts.forEach((obj) => {
      obj.classList.remove("fade-out");
      obj.classList.fade("fade-in");
    });;
  }
});
