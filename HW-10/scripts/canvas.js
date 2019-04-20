var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

var color=['cyan','royalblue','darkred','darkorange','teal','sandybrown','deepskyblue'];

var h = 100;
var j = 100;
var k = 200;
var w = 100;
var x = 100;
var y = 100;


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//rect
//c.fillStyle = 'rgba(255,255,0,0.5)';
//c.fillRect(x,y,w,h);
//c.fillStyle = 'rgba(0,255,255,0.5)';
//c.fillRect(x-j,y+j,w,h);
//c.fillStyle = 'rgba(255,0,255,0.5)';
//c.fillRect(x+j,y+j,w,h);
//c.fillStyle = 'rgba(0,255,0,0.5)';
//c.fillRect(x,y+k,w,h);


//line
//c.beginPath();
//c.moveTo(50,300);
//c.lineTo(300,100);
//c.lineTo(400,100);
//c.strokeStyle = "blue";
//c.stroke();

//arc
//c.arc(x:Int, y: Int, r: Int, startAngle:
//Float, endAngle: Float,
//drawCounterClockwise: Bool (false));
//c.beginPath();
//c.arc(300,300,30,0, Math.PI * 2, false);
//c.strokeStyle = 'red';
//c.stroke();

//for (var i = 0; i < 10; i++){
//  var x = Math.random() * window.innerWidth;
//  var y = Math.random() * window.innerHeight;
//  c.beginPath();
//  c.arc(x,y,30,0, Math.PI * 2, false);
//  c.strokeStyle = color[Math.floor(Math.random() * color.length)];
//  c.stroke();
//}

//c.beginPath();
//c.arc(x,y,30,0, Math.PI * 2, false);
//c.strokeStyle = color[Math.floor(Math.random() * color.length)];
//c.stroke();

function  animate(){
  requestAnimationFrame(animate);
  c.beginPath();
  c.arc(x,y,30,0, Math.PI * 2, false);
  c.strokeStyle = color[Math.floor(Math.random() * color.length)];
  c.stroke();
}
