
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  drawBall(255, 200, 100, "#FFAAAA");
  drawBall(170, 120, 45, "#C6CBEF");
  drawBall(335, 120, 45, "#C6CBEF");
  drawBall(220, 200, 15, "#FDFDF6");
  drawBall(295, 200, 15, "##FDFDF6");
  drawBall(220, 200, 9, "#1B1919");
  drawBall(295, 200, 9, "#1B1919");
  drawBall(257, 255, 15, "#F0ECE2");

//esta funcion dibuja una bolita en x,y
function drawBall(x, y, radius, color) {
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI*2, false);
  context.stroke();
  context.fillStyle = color;
  context.fill();
  context.closePath();
}
