var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var x = 300;
var y = 300;
var w = 300;
var h = 300;
var r = 30;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = 'rgba(255,0,0,0.25)';
ctx.fillRect(x,y,w,h);
ctx.fillStyle = 'rgba(0,255,0,0.25)';
ctx.fillRect(x + 20 ,y + 10,w,h);
ctx.fillStyle = 'rgba(0,0,255,0.25)';
ctx.fillRect(x + 40 ,y + 20,w,h);

//line
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x + 40, y + 20);
ctx.strokeStyle = 'yellow'; //must be above stroke
ctx.stroke();


//circle //arc
ctx.beginPath();
ctx.arc(x,y,r,0,Math.PI * 2, false);
ctx.strokeStyle = 'cyan';
   ctx.stroke();
console.log(canvas);
