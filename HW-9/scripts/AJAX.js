$(document).ready(function () {
  $("button").click(function () {
    $("#tractorInformation").load("data/tractor.json", function(responseText) {
      alert(responseText);
    });
  });
});

/*function fadeText()
{
  $("#tractorInformation").fadeOut("slow").fadeIn("slow");
}
*/
