let main = document.querySelector(".main");
let searchInput = document.querySelector(".search-con");
let hiddenBtns = document.querySelectorAll(".search-con button");
let expandBtn = document.querySelector(".fa-bars ");
let expandableBar = document.querySelector(".slider-expandBar");
let contractBtn = document.querySelector(".fa-x");
let navBar = document.querySelector("nav");

searchInput.addEventListener("input", () => {
  if (this.value !== "") {
    hiddenBtns.forEach((btn) => {
      btn.style.visibility = "hidden";
      searchInput.style.border = "2px solid white";
    });
  }
});

let expandableBarSlider = () => {
  expandableBar.classList.toggle("expandStyle");
};

expandBtn.addEventListener("click", expandableBarSlider);
contractBtn.addEventListener("click", expandableBarSlider);

// main.addEventListener("click", () => {
//   if (!searchInput.value.length) {
//     hiddenBtns.forEach((btn) => {
//       btn.style.visibility = "visible";
//       searchInput.style.border = "2px solid transparent";
//     });
//   }
// });
