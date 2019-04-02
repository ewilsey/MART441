var tractorCounter = 1;

$(document).ready(function () {
  $("button").click(function () {
    $("#tractorInformation").load("data/tractor-" + tractorCounter + ".json", function(responseText) {
      var tractor = JSON.parse(responseText);
      $("#tractorInformation").html("Manufacturer: " + tractor.manufacturer
      + "<br>Model: " + tractor.model + "<br> Body Color: " + tractor.color.body + "<br> Rim Color: "
      + tractor.color.rim + "<br>Available Wheel Setups:<br>" +
      tractor.setups[0] + "<br>" + tractor.setups[1] + "<br>" + tractor.setups[2] + "<br>" + tractor.setups[3]);
    });
    tractorCounter ++;
    if(tractorCounter >31){
      tractorCounter =1;
    }
  });
});

/*function fadeText()
{
  $("#tractorInformation").fadeOut("slow").fadeIn("slow");
}
*/
(function($){
        $.fn.bluey = function () {
            this.css("background-color", "blue");
            this.css("color", "white");
            this.css("font-size", 24);
            return this;
        };
        }(jQuery));
        $(function () {
            $("button").click(function () {
                $("#changeDiv").bluey().fadeOut("slow").fadeIn("slow");
            });

        });
