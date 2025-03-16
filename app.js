let main = document.querySelector(".main");
let searchInput = document.querySelector(".search-con");
let hiddenBtns = document.querySelectorAll(".search-con button");

searchInput.addEventListener("input", () => {
  if (this.value !== "") {
    hiddenBtns.forEach((btn) => {
      btn.style.visibility = "hidden";
      searchInput.style.border = "2px solid white";
    });
  }
});

// main.addEventListener("click", () => {
//   if (!searchInput.value.length) {
//     hiddenBtns.forEach((btn) => {
//       btn.style.visibility = "visible";
//       searchInput.style.border = "2px solid transparent";
//     });
//   }
// });
