$(document).ready(function () {
  $("button").click(function () {
    $("#tractorInformation").load("data/tractor.json", fadeText);
  });
});

function fadeText()
{
  $("#tractorInformation").fadeOut("slow").fadeIn("slow");
}
