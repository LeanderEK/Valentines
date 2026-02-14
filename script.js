const pot = document.getElementById("pot");
const stems = document.querySelectorAll(".stem-path");
const flowers = document.querySelectorAll(".flower");
const title = document.getElementById("title");
const confettiContainer = document.getElementById("confetti");

const colors = ["#ff4da6","#ffd700","#8bc34a","#00bfff","#ff7f50"];
let grown = false;

function createConfettiPiece() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti-piece");
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.left = Math.random() * 100 + "%";
  confetti.style.width = 5 + Math.random() * 5 + "px";
  confetti.style.height = 5 + Math.random() * 5 + "px";
  confetti.style.transform = `translateY(-20px) rotate(${Math.random() * 360}deg)`;

  const duration = 2 + Math.random() * 2 + "s";
  const delay = Math.random() * 0.5 + "s";

  confettiContainer.appendChild(confetti);

  confetti.style.animation = `fall ${duration} linear forwards ${delay}`;

  // Remove the piece after animation completes
  setTimeout(() => confetti.remove(), (parseFloat(duration) + parseFloat(delay)) * 1000);
}

// Function to keep generating confetti repeatedly
function startEndlessConfetti() {
  setInterval(() => {
    // Generate a few confetti at a time
    for (let i = 0; i < 3; i++) {
      createConfettiPiece();
    }
  }, 150); // every 150ms
}

pot.addEventListener("click", () => {
  if (grown) return;
  grown = true;

  // Animate stems
  stems.forEach((stem, i) => {
    setTimeout(() => stem.style.strokeDashoffset = "0", i * 200);
  });

  // Bloom flowers
  setTimeout(() => {
    flowers.forEach((flower, i) => {
      setTimeout(() => flower.style.transform = "translate(-50%,-50%) scale(1)", i * 300);
    });
  }, 1500);

  // Start endless confetti after flowers bloom
  setTimeout(() => {
    startEndlessConfetti();
  }, 1500 + flowers.length * 300 + 500);

  // Show title
  setTimeout(() => title.classList.add("show"), 2500);
});
