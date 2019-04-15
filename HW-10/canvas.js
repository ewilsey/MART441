var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var x = 10;
var y = 10;
var w = 10;
var h = 10;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillRect(x,y,w,h);
ctx.fillRect(x + 20 ,y + 10,w,h);
ctx.fillRect(x + 40 ,y + 20,w,h);

//line
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x + 40, y + 20);
ctx.stroke();
console.log(canvas);
