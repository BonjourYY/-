// Import stylesheets
import './style.css';

// 获取canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var eraserEnabled = false;

// 初始化canvas大小，并在拖动窗口时，自动设置canvas的大小。
autoSetCanvasSize(canvas);

// 监听用户操作
listenToUser(canvas);

// 改变画笔颜色
document.getElementsByClassName('optionsColor')[0].onclick = function (e) {
  ctx.strokeStyle = e.target.id;
};

pen.onclick = function () {
  eraserEnabled = false;
  eraser.classList.remove('active');
  pen.classList.add('active');
};
eraser.onclick = function () {
  eraserEnabled = true;
  pen.classList.remove('active');
  eraser.classList.add('active');
};

////////////////////////////////////////

function autoSetCanvasSize(canvas) {
  initCanvas(canvas);
  window.onresize = function () {
    initCanvas(canvas);
  };
}

function initCanvas(canvas) {
  var wrapper = document.getElementById('wrapper');
  canvas.width = wrapper.clientWidth;
  canvas.height = '700';
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineWidth = 5;
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
}

function listenToUser(canvas) {
  var using = false;
  var lastPoint = { x: undefined, y: undefined };

  // 特性检测
  if (document.body.ontouchstart !== undefined) {
    // 触屏设备
    canvas.ontouchstart = function (x) {
      var position = getMousePos(x.target, x.touches[0]);
      using = true;
      if (eraserEnabled) {
        ctx.clearRect(position.x - 5, position.y - 5, 10, 10);
      } else {
        lastPoint = { x: position.x, y: position.y };
        // console.log(lastPoint);
      }
    };
    canvas.ontouchmove = function (x) {
      var position = getMousePos(x.target, x.touches[0]);
      if (!using) {
        return;
      }
      if (eraserEnabled) {
        ctx.clearRect(position.x - 5, position.y - 5, 10, 10);
      } else {
        var newPoint = { x: position.x, y: position.y };
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
        lastPoint = newPoint;
      }
    };
    canvas.ontouchend = function () {
      using = false;
    };
  } else {
    // 非触屏设备
    canvas.onmousedown = function (x) {
      var position = getMousePos(x.target, x);
      using = true;
      if (eraserEnabled) {
        ctx.clearRect(position.x - 5, position.y - 5, 10, 10);
      } else {
        lastPoint = { x: position.x, y: position.y };
        console.log(lastPoint);
      }
    };

    canvas.onmousemove = function (x) {
      var position = getMousePos(x.target, x);
      if (!using) {
        return;
      }
      if (eraserEnabled) {
        ctx.clearRect(position.x - 5, position.y - 5, 10, 10);
      } else {
        console.log('1234');
        var newPoint = { x: position.x, y: position.y };
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
        lastPoint = newPoint;
      }
    };

    canvas.onmouseup = function (x) {
      using = false;
    };
  }
}

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top,
  };
}
