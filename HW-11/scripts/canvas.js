window.onload = canfunc;
//window.onresize = canfunc;

var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    squareX = 0;
    squareY = 0;

canvas.width = 720;
canvas.height = 480;

function canfunc(){
  ctx.fillStyle = 'NavajoWhite ';
  ctx.fillRect(10,10,canvas.width-20,canvas.height-20);
  console.log('func');
}
