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
  function Launcher(){
    this.y = 280, this.x = cW*.5-25, this.w = 50, this.h = 50, this.dir, this.bg="Goldenrod", this.weapon = [];
    this.render = function(){
      if(this.dir == 'left'){
        this.x-=5;
      } else if (this.dir == 'right') {
        this.x+=5;
      }
      ctx.fillStyle = this.bg;
      ctx.fillRect(this.x,this.y,this.w,this.h);
      for(var i =0, i <this.weapon.length;i++){
        var weap = this.weapon[i];
        ctx.fillStyle = weap.bg;
        ctx.fillRect(weap.x,weap.y-=5,weap.w,weap.h);
        this.hitDetect(this.weapon[i],i);
        if(weap.y<=0){
          this.weapon.splice(i,1);
        }
      }
      if(enemies.length == 0){
        clearInterval(animateInterval);
        ctx.fillStyle = "Cyan";
        ctx.fillText('Stage Complete', cW*.5-130,50,300);
      }
    }

  };
  //var tank = new Tank();

  function animate()  {
    ctx.clearRect(0,0,cW,cH);
    renderEnemies();
  }
  var animateInterval = setInterval(animate,  30);
}
window.addEventListener('load', function(event) {
  initCanvas();
});
/*canvas.width = 720;
canvas.height = 480;

  function canfunc(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = 'NavajoWhite ';
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = squareColor;
  ctx.fillRect(squareX,squareY,squareWidth,squareHeight);

  console.log('func');
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
}, 1000/60);*/
