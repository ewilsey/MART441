$(document).ready(function () {
  $("button").click(function () {
    $("#tractorInformation").load("tractor.txt", fadeText);
  });
});

function fadeText()
{
  $("#tractorInformation").fadeOut("slow").fadeIn("slow");
}
