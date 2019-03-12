//var insectSelector="#insect";
var allInsects = new Array();
class InsectInfo {
  constructor(selector, imgsPath) {
    this.selector=selector;
    this.imgsPath=imgsPath;
  }

  get theSelector() {
    return this.selector;
  }

  get theImgsPath() {
    return this.imgsPath;
  }

  toString() {
    return this.selector + ":" + this.imgsPath;
  }

}
function initializeArray() {
  var insect= new InsectInfo("#insect", "imgs/insect.jpg")
  allInsects.push(insect);
}
$(document).ready(function() {
  console.log(allInsects[0].toString());
  console.log(allInsects[0].theSelector());
  $(allInsects[0].theSelector).src = allInsects[0].theImgsPath;

  $("button").click(function(){
    //for(var i = 0; i <5; i++){moveEyes();}
    setInterval(moveEyes, 3000);

    //$("#insect").fadeOut().fadeIn();
    $(allInsects[0].theSelector).fadeOut().fadeIn();

  });
});

function moveEyes() {
  $("#eyeL").animate({left:250}).animate({left:150}).animate({left:200});
  $("#eyeR").animate({left:750}).animate({left:650}).animate({left:700});
}
