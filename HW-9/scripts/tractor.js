let tractor = {
    "manufacturer" : "Hürlimann",
    "model" : "H 488",
    "color" : {
        "body" : "Green",
        "rim" : "Grey"
    },
    "setups" : [
        "Standard",
        "Narrow",
        "Wide",
        "Twin-rear"
    ]
}

  $(function (){
    $("button").click(function () {
      showTractorInfo();
  }):

  function showTractorInfo()
    {
      $("#tractorInformation").html("Manufacturer: " + tractor.manufacturer
      + "<br>Model: " + tractor.model + "<br> Body Color: " + tractor.color.body + "<br> Rim Color: "
      + tractor.color.rim + "<br>Available Wheel Setups:<br>" +
      tractor.setups[0] + "<br>" + tractor.setups[1] + "<br>" + tractor.setups[2] + "<br>" + tractor.setups[3]);
    }
