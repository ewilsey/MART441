var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var h = 100;
var j = 100;
var k = 200;
var w = 100;
var x = 100;
var y = 100;


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//rect
c.fillRect(x,y,w,h);
c.fillRect(x-j,y+j,w,h);
c.fillRect(x+j,y+j,w,h);
c.fillRect(x,y+k,w,h);

//line
c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.lineTo(400,100);
c.stroke();
