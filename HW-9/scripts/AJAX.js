$(document).ready(function () {
  $("button").click(function () {
    $("#tractorInformation").load("data/tractor.json", function(responseText) {
      var tractor = JSON.parse(responseText);
    });
  });
});

/*function fadeText()
{
  $("#tractorInformation").fadeOut("slow").fadeIn("slow");
}
*/
