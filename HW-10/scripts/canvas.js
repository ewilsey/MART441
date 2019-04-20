var canvas = document.querySelector('canvas');
var h = 100;
var j = 100;
var k = 200;
var w = 100;
var x = 100;
var y = 100;


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillRect(x,y,w,h);
c.fillRect(x-j,y+j,w,h);
c.fillRect(x+j,y+j,w,h);
c.fillRect(x,y+k,w,h);
