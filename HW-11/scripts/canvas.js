window.onload = canfunc;
window.onresize = canfunc;

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function canfunc(){
  console.log('func');
}
