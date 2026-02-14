const pot = document.getElementById("pot");
const stems = document.querySelectorAll(".stem-path");
const flowers = document.querySelectorAll(".flower");
const title = document.getElementById("title");

let grown = false;

pot.addEventListener("click", () => {
  if (grown) return;
  grown = true;

  // Animate stems drawing upward
  stems.forEach((stem, i) => {
    setTimeout(() => {
      stem.style.strokeDashoffset = "0";
    }, i * 200);
  });

  // Bloom flowers
  setTimeout(() => {
    flowers.forEach((flower, i) => {
      setTimeout(() => {
        flower.style.transform = "translate(-50%,-50%) scale(1)";
      }, i * 300);
    });
  }, 1500);

  // Show title
  setTimeout(() => {
    title.classList.add("show");
  }, 2500);
});
