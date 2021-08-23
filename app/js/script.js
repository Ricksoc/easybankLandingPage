const btnhamburger = document.querySelector("#btnhamburger");

btnhamburger.addEventListener("click", (e) => {
  console.log("clicked " + e);

  if (btnhamburger.classList.contains("open")) {
    btnhamburger.classList.remove("open");
  } else {
    btnhamburger.classList.add("open");
  }
});
