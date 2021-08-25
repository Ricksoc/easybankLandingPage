const btnhamburger = document.querySelector("#btnhamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".fade");

btnhamburger.addEventListener("click", (e) => {
  console.log("clicked " + e);

  header.classList.toggle("open");

  if (header.classList.contains("open")) {
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
  } else {
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
  }
});
