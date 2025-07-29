const container = document.getElementById("background");
const totalLines = 60;

for (let i = 0; i < totalLines; i++) {
  const line = document.createElement("div");
  line.classList.add("line");

  // Position horizontale aléatoire
  line.style.left = `${Math.random() * window.innerWidth}px`;

  // Délai d’animation aléatoire
  line.style.animationDelay = `${Math.random() * 4}s`;

  container.appendChild(line);
}
