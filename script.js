const pot = document.getElementById("pot");
const stem = document.getElementById("stem");
const flower = document.querySelector(".flower");
const title = document.getElementById("title");

let grown = false;

pot.addEventListener("click", () => {
  if (grown) return;
  grown = true;

  // Grow stem
  stem.style.height = "120px";

  // Bloom flower
  setTimeout(() => {
    flower.style.transform = "scale(1)";
  }, 1200);

  // Show title
  setTimeout(() => {
    title.classList.add("show");
  }, 2000);
});
