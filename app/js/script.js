const btnhamburger = document.querySelector("#btnhamburger");
const header = document.querySelector(".header");

header.addEventListener("click", (e) => {
  console.log("clicked " + e);

  header.classList.toggle("open");
});
