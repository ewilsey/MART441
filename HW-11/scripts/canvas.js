window.onload = canfunc;
window.onresize = canfunc;

var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    squareX = 0,
    squareY = 0,
    squareColor = "Purple",
    squareWidth = 15,
    squareHeight =15;
    squareMoving = 'right';
    squareMovingY = "down";
function initCanvas(){
  var cW = ctx.canvas.width, cH = ctx.canvas.height;
  var enemies = [ {"id":"enemy1","x":100,"y":-20,"w":40,"h":20},
                {"id":"enemy2","x":225,"y":-20,"w":40,"h":20},
                {"id":"enemy3","x":350,"y":-20,"w":40,"h":20},
                {"id":"enemy4","x":100,"y":-70,"w":40,"h":20},
                {"id":"enemy5","x":225,"y":-70,"w":40,"h":20},
                {"id":"enemy6","x":350,"y":-70,"w":40,"h":20},
  ];
  function renderEnemies(){
    for(var i = 0; i < enemies.length; i ++)  {
      ctx.fillStyle = "Red";
      ctx.fillRect(enemies[i].x, enemies[i].y+=.5, enemies[i].w, enemies[i].h);
     }
  }
  function animate()  {
    //ctx.clearRect(0,0,cW,cH);
    renderEnemies();
  }
  var animateInterval = setInterval(animate,  30);
}
window.addEventListener('load', function(event) {
  initCanvas();
});
canvas.width = 720;
canvas.height = 480;

  function canfunc(){
  //ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = 'NavajoWhite ';
  ctx.fillRect(0,0,canvas.width,canvas.height);

  //ctx.fillStyle = squareColor;
  //ctx.fillRect(squareX,squareY,squareWidth,squareHeight);

  //console.log('func');
}

var refresh = setInterval(canfunc, 1000/60);

var moving = setInterval(function(){
  if(squareX + squareWidth < canvas.width && squareMoving == 'right') {
    squareX +=1;
  }else if (squareX > 0 && squareMoving == 'left')  {
    squareX -=1;
  } else if(squareX + squareWidth == canvas.width)  {
    squareMoving = 'left';
  } else {
    squareMoving = 'right';
  }

  if(squareY + squareHeight < canvas.height && squareMovingY == "down")  {
    squareY +=1;
  } else if (squareY > 0 && squareMovingY == "up") {
    squareY -=1;
  }else if (squareY + squareHeight == canvas.height) {
    squareMovingY = "up";
  }else {
    squareMovingY = "down";
  }
}, 1000/60);
