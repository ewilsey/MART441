var insectSelector="#insect";
var allInsects = new Array();
var randArray = ["un", "deux", "trois"];

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
  var insect1= new InsectInfo("#insect", "imgs/insect2.jpg")
  var insect2= new InsectInfo("#insect", "imgs/insect3.jpg")

  allInsects.push(insect);
  allInsects.push(insect1);
  allInsects.push(insect2);
}

$(document).ready(function() {

  //console.log(allInsects[0].toString());
  //console.log(allInsects[0].theSelector);
  //$(allInsects[0].theSelector).src = allInsects[0].theImgsPath;

  $(allInsects[randomizer()].theSelector).attr("src", allInsects[randomizer()].theImgsPath);

  });



  function randomizer(){

    var randomNumber = Math.floor(Math.random()*randArray.length);
    return randomNumber;

  }

  $("button").click(function(){
    //for(var i = 0; i <5; i++){moveEyes();}
    setInterval(moveEyes, 7000);
    $(".word").toggle();
    //$("#insect").fadeOut().fadeIn();
    $(allInsects[0].theSelector).fadeOut().fadeIn();

  });


function moveEyes() {

  $("#eyeL").animate({left:300}).animate({left:100}).animate({left:200});
  $("#eyeR").animate({left:800}).animate({left:600}).animate({left:700});

}
