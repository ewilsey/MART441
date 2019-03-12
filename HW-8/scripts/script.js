$(document).ready(function() {
  $("button").click(function(){
    $("#eyeL").animate({left:250}).animate({left:150}).animate({left:200});
    $("#eyeR").animate({left:750}).animate({left:650}).animate({left:700});
  });
});
