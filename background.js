const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const lines = [];

for (let i = 0; i < canvas.width; i += 20) {
  lines.push({
    x: i,
    y: Math.random() * canvas.height,
    speed: Math.random() * 2 + 1,
    direction: Math.random() < 0.5 ? 1 : -1 // haut ou bas
  });
}

function draw() {
  ctx.fillStyle = "rgba(10,10,10,0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#00cfff";
  ctx.lineWidth = 1;

  for (let line of lines) {
    ctx.beginPath();
    ctx.moveTo(line.x, line.y);
    ctx.lineTo(line.x, line.y + 20);
    ctx.stroke();

    line.y += line.speed * line.direction;
    if (line.y > canvas.height || line.y < 0) {
      line.y = Math.random() * canvas.height;
      line.direction *= -1;
    }
  }

  requestAnimationFrame(draw);
}

draw();
