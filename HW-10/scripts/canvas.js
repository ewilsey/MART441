var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

var color=['cyan','royalblue','darkred','darkorange','teal','sandybrown','deepskyblue'];
var h = 100;
var j = 100;
var k = 200;
var w = 100;


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

function Circle(x,y,dx,dy,r) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.r = r;

  this.draw = function()  {
    c.beginPath();
    c.arc(this.x,this.y,this.r,0, Math.PI * 2, false);
    c.strokeStyle = color[Math.floor(Math.random() * color.length)];
    c.stroke();
  }

  this.update = function()  {
    if (this.x + this.r > innerWidth || this.x - this.r < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.r > innerHeight || this.y - this.r <0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
    }
  }

var circleArray = [];
for (var i = 0; i < 2000; i++) {
  var x = Math.random() * innerWidth;
  var y = Math.random() * innerHeight;
  var dx = (Math.random() - 0.5) * 8;
  var dy = (Math.random() - 0.5) * 8;
  var r = 30;
  circleArray.push(new Circle(x,y,dx,dy,r));
}

function  animate(){
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth,innerHeight);
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }

}

animate();
