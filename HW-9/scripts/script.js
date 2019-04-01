let tractor =  {
    "Manufacturer": "Fendt",
    "Model": "828 Vario",
    "Color": "Green",
    "Year": "2010"
  }


function showTractorInfo()
{
  document.getElementById("tractorInformation").innerHTML = "Manufacturer: " + tractor.manufacturer
                + "<br>Model:" + tractor.model + "<br>Color:" + tractor.color + "<br>Year:"
                + tractor.year;
}
