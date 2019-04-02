$(document).ready(function () {
  $("button").click(function () {
    $("#tractorInformation").load("data/tractor.txt", fadeText);
  });
});

function fadeText()
{
  $("#tractorInformation").fadeOut("slow").fadeIn("slow");
}
