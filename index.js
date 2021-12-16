// Import stylesheets
import './style.css';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var painting = false;
var lastPoint = { x: undefined, y: undefined };

canvas.onmousedown = function (x) {
  painting = true;
  var positionX = x.clientX;
  var positionY = x.clientY;
  lastPoint = { x: positionX, y: positionY };
  console.log(lastPoint);
  drawCircle(positionX, positionY, 1);
};

canvas.onmousemove = function (x) {
  if (painting) {
    var positionX = x.clientX;
    var positionY = x.clientY;
    var newPoint = { x: positionX, y: positionY };
    drawCircle(positionX, positionY, 1);
    drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
    lastPoint = newPoint;
  } else {
  }
};

canvas.onmouseup = function (x) {
  painting = false;
};

function drawCircle(x, y, radius) {
  // 画圆
  ctx.fillStyle = 'yellow';
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.strokeStyle = 'yellow';
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineWidth = 5;
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
}
