const pot = document.getElementById("pot");
const stem = document.getElementById("stem");
const flower = document.getElementById("flower");
const title = document.getElementById("title");

let grown = false;

pot.addEventListener("click", () => {
  if (grown) return;
  grown = true;

  stem.style.height = "120px";

  setTimeout(() => {
    flower.style.transform = "scale(1)";
  }, 1200);

  setTimeout(() => {
    title.classList.add("show");
  }, 2000);
});
