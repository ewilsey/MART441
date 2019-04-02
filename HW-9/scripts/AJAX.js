$(document).ready(function () {
  $("button").click(function () {
    $("#tractorInformation").load("data/tractor.json", function(responseText) {
      var tractor = JSON.parse(responseText);
      $("#tractorInformation").html("Manufacturer: " + tractor.manufacturer
      + "<br>Model: " + tractor.model + "<br> Body Color: " + tractor.color.body + "<br> Rim Color: "
      + tractor.color.rim + "<br>Available Wheel Setups:<br>" +
      tractor.setups[0] + "<br>" + tractor.setups[1] + "<br>" + tractor.setups[2] + "<br>" + tractor.setups[3]);
    });
  });
});

/*function fadeText()
{
  $("#tractorInformation").fadeOut("slow").fadeIn("slow");
}
*/
