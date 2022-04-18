// # Get elements

const img = document.querySelector(".main-img img");
const toggleBtn = document.querySelector(".toggle");
const toggleText = document.querySelectorAll(".toggle-text");

let bool = true;

toggleBtn.addEventListener("click", () => {
  if (bool === true) {
    img.src = "./img/cup-light.png";
    toggleText.forEach((text) => {
      text.innerText = "White ";
    });
  }
});
