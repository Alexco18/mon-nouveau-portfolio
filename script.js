// Fond dynamique
const container = document.getElementById("background");
const totalLines = 80;

for (let i = 0; i < totalLines; i++) {
  const line = document.createElement("div");
  line.classList.add("line");
  line.style.left = Math.random() * window.innerWidth + "px";
  line.style.animationDelay = Math.random() * 6 + "s";
  container.appendChild(line);
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
