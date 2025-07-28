const canvas = document.getElementById("rainCanvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const columns = canvas.width / 20;
const drops = [];

for (let i = 0; i < columns; i++) {
  drops[i] = Math.random() * -canvas.height;
}

function drawLines() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0ff";
  ctx.font = "15px monospace";

  for (let i = 0; i < drops.length; i++) {
    let x = i * 20;
    let y = drops[i];
    ctx.fillRect(x, y, 2, 20); // ligne verticale
    drops[i] += 4;

    if (drops[i] > canvas.height) {
      drops[i] = Math.random() * -canvas.height;
    }
  }
}

setInterval(drawLines, 40);
