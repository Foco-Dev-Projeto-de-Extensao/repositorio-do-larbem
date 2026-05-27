const bolinha = document.getElementById('cursor-bolinha');
let mouseX = 0, mouseY = 0;
let bolinhaX = 0, bolinhaY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animar() {
  bolinhaX += (mouseX - bolinhaX) * 0.15; /* 0.15 = velocidade do atraso */
  bolinhaY += (mouseY - bolinhaY) * 0.15;
  bolinha.style.left = bolinhaX + 'px';
  bolinha.style.top  = bolinhaY + 'px';
  requestAnimationFrame(animar);
}

animar();