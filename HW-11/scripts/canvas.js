var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

canvas.style.width = canvas.width + "px";
canvas.style.height = canvas.width + "px";
input.offset = new Vector2(GetLeft(canvas), GetTop(canvas));

var rect = new Rectangle(250,250,50,50);
rect.color = new Color(0,0,255,1);

var player = new Rectangle(0,0,25,25);
player.color.g=0;
player.color.b=0;


var Update = setInterval(function() {
  if (input.a)
  player.x -= 5;
  if (input.d)
  player.x += 5;
  if (input.w)
  player.y -= 5;
  if (input.s)
  player.y += 5;
  if(player.x<0)
  player.x =0;
  if (player.y<0)
  player.y=0;
}, 1);

var Draw = setInterval(function() {

ctx.clearRect(0,0,canvas.width,canvas.height);
rect.Draw(ctx);
player.Draw(ctx);
}, 33);
