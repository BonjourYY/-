// Import stylesheets
import './style.css';

// 获取canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var eraserEnabled = false;

// 初始化canvas大小，并在拖动窗口时，自动设置canvas的大小。
autoSetCanvasSize(canvas);

listenToMouse(canvas);

var actions = document.getElementsByClassName('actions')[0];

eraser.onclick = function () {
  eraserEnabled = true;
  actions.className = 'actions x';
};

brush.onclick = function () {
  eraserEnabled = false;
  actions.className = 'actions';
};

////////////////////////////////////////

function autoSetCanvasSize(canvas) {
  initCanvas(canvas);
  window.onresize = function () {
    initCanvas(canvas);
  };
}

function initCanvas(canvas) {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
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

function listenToMouse(canvas) {
  var using = false;
  var lastPoint = { x: undefined, y: undefined };

  canvas.onmousedown = function (x) {
    var positionX = x.clientX;
    var positionY = x.clientY;
    using = true;
    if (eraserEnabled) {
      ctx.clearRect(positionX - 5, positionY - 5, 10, 10);
    } else {
      lastPoint = { x: positionX, y: positionY };
      console.log(lastPoint);
    }
  };

  canvas.onmousemove = function (x) {
    var positionX = x.clientX;
    var positionY = x.clientY;
    if (!using) {
      return;
    }
    if (eraserEnabled) {
      ctx.clearRect(positionX - 5, positionY - 5, 10, 10);
    } else {
      var newPoint = { x: positionX, y: positionY };
      drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
      lastPoint = newPoint;
    }
  };

  canvas.onmouseup = function (x) {
    using = false;
  };
}
