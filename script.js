const canvas = document.getElementById("rainCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const drops = Array(150).fill().map(() => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  length: Math.random() * 30 + 10,
  speed: Math.random() * 1 + 0.3,
}));

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#00ffe7";
  ctx.lineWidth = 1;

  drops.forEach(drop => {
    ctx.beginPath();
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x, drop.y + drop.length);
    ctx.stroke();

    drop.y += drop.speed;
    if (drop.y > canvas.height) drop.y = -drop.length;
  });

  requestAnimationFrame(draw);
}

draw();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
