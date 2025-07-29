const container = document.getElementById("background");
const totalLines = 60;
const totalParticles = 40;

// Lignes animées
for (let i = 0; i < totalLines; i++) {
  const line = document.createElement("div");
  line.classList.add("line");
  line.style.left = Math.random() * window.innerWidth + "px";
  line.style.animationDelay = Math.random() * 6 + "s";
  container.appendChild(line);
}

// Particules animées
for (let i = 0; i < totalParticles; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  particle.style.left = Math.random() * window.innerWidth + "px";
  particle.style.top = Math.random() * window.innerHeight + "px";
  particle.style.animationDelay = Math.random() * 10 + "s";
  container.appendChild(particle);
}

// Hauteur dynamique
function setVH() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}
setVH();

window.addEventListener('resize', () => {
  setVH();
  const menu = document.getElementById('menu');
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
    setTimeout(() => { menu.style.display = 'flex'; }, 100);
  }
});
