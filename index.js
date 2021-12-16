// Import stylesheets
import './style.css';

// 获取canvas
var canvas = document.getElementById('canvas');

// 设置标记，判断用户点击之后开始绘画。
var painting = false;

// 监听鼠标点击
canvas.onmousedown = function (x) {
  painting = true;
  var positionX = x.clientX;
  var positionY = x.clientY;
  var point = document.createElement('div');
  canvas.appendChild(point);
  point.style =
    'width:10px;height:10px;background-color:red;border-radius:50%;position:absolute;left:' +
    (positionX - 5) +
    'px;' +
    'top:' +
    (positionY - 5) +
    'px;';
  // console.log(Number(point.style.width));
};

// 监听鼠标滑动
canvas.onmousemove = function (x) {
  if (painting) {
    var positionX = x.clientX;
    var positionY = x.clientY;
    var point = document.createElement('div');
    canvas.appendChild(point);
    point.style =
      'width:10px;height:10px;background-color:red;border-radius:50%;position:absolute;left:' +
      (positionX - 5) +
      'px;' +
      'top:' +
      (positionY - 5) +
      'px;';
  } else {
  }
};

// 监听用户松开鼠标;
canvas.onmouseup = function () {
  painting = false;
};
