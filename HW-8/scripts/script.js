//var insectSelector="#insect";
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
  $("button").click(function(){
    //for(var i = 0; i <5; i++){moveEyes();}
    setInterval(moveEyes, 7000);

    //$("#insect").fadeOut().fadeIn();
    $(allInsects[0].theSelector).fadeOut().fadeIn();
    $(allInsects[randomizer()].theSelector).attr("src", allInsects[randomizer()].theImgsPath);
  });


  });



  function randomizer(){

    var randomNumber = Math.floor(Math.random()*randArray.length);
    return randomNumber;

  }




function moveEyes() {

  $("#eyeL").animate({left:300,width:90,height:90}).animate({left:100,width:50,height:50}).animate({left:200,width:70,height:70});
  $("#eyeR").animate({left:800,width:90,height:90}).animate({left:600,width:50,height:50}).animate({left:700,width:70,height:70});
  $(".word").animate({fontSize: "1em"}).animate({fontSize: "1.5em"}).animate({fontSize: "1em"}).animate({fontSize: "1.5em"});

}
