// Import stylesheets
import './style.css';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// ctx.fillStyle = 'green';
// ctx.fillRect(0, 0, 100, 100);

// 画三角形
// ctx.fillStyle = 'red';
// ctx.beginPath();
// ctx.moveTo(180, 180);
// ctx.lineTo(200, 180);
// ctx.lineTo(200, 200);
// ctx.fill();

// 画圆
// ctx.fillStyle = 'yellow';
// ctx.beginPath();
// ctx.arc(250, 250, 20, 0, Math.PI);
// ctx.stroke();

function drawCircle(x, y, radius) {
  // 画圆
  ctx.fillStyle = 'yellow';
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

// drawCircle(250, 250, 20);
var painting = false;

canvas.onmousedown = function (x) {
  painting = true;
  var positionX = x.clientX;
  var positionY = x.clientY;
  console.log(positionX, positionY);
  drawCircle(positionX, positionY, 20);
};

canvas.onmousemove = function (x) {
  if (painting) {
    var positionX = x.clientX;
    var positionY = x.clientY;
    console.log(positionX, positionY);
    drawCircle(positionX, positionY, 20);
  } else {
  }
};

canvas.onmouseup = function (x) {
  painting = false;
};
