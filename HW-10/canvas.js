var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//var x = 300;
//var y = 300;
var w = 300;
var h = 300;
var r = 30;
var dx = (Math.random() - 0.5) * 8;
var dy = (Math.random() - 0.5) * 8;
var x = Math.random() * window.innerWidth;
var y = Math.random() * window.innerHeight;
var color=['cyan','royalblue','darkred','darkorange','teal','sandybrown','deepskyblue'];

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
//ctx.beginPath();
//ctx.arc(x,y,r,0,Math.PI * 2, false);
//ctx.strokeStyle = 'cyan';
//ctx.stroke();

/*for (var i = 0; i < 100; i++) {

  ctx.beginPath();
  ctx.arc(x1,y1,r,0,Math.PI * 2, false);

  //ctx.strokeStyle = '#'+ Math.random().toString(16).slice(3,6);﻿
  ctx.strokeStyle = color[Math.floor(Math.random() * color.length)];
  ctx.stroke();
}
*/
console.log(canvas);

function Circle(x, y){
  this.x = x;
  this.y = y;
  this.draw = function(){
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI * 2, false);
    ctx.strokeStyle = 'cyan';
    ctx.stroke();
  }
}

var circle = Circle(200,200);

function  animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,innerWidth,innerHeight);

  circle.draw();

  ctx.beginPath();
  ctx.arc(x,y,r,0,Math.PI * 2, false);
  ctx.strokeStyle = 'blue';
  ctx.stroke();



  if (x + r > innerWidth || x - r < 0) {
    dx =- dx;
  }

  if (y + r > innerHeight || y - r < 0) {
    dy =- dy;

  }
x += dx;
y += dy;

}

animate();
