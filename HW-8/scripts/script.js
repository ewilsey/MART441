var insectSelector="#insect";
$(document).ready(function() {
  $("button").click(function(){
    //for(var i = 0; i <5; i++){moveEyes();}
    setInterval(moveEyes, 3000);

    //$("#insect").fadeOut().fadeIn();
    $(insectSelector).fadeOut().fadeIn();

  });
});

function moveEyes() {
  $("#eyeL").animate({left:250}).animate({left:150}).animate({left:200});
  $("#eyeR").animate({left:750}).animate({left:650}).animate({left:700});
}
