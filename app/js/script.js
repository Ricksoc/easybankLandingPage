const btnhamburger = document.querySelector("#btnhamburger");

btnhamburger.addEventListener("click", (e) => {
  console.log("clicked " + e);

  btnhamburger.classList.toggle("open");
});
