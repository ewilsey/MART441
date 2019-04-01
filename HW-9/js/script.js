let tractor =  {
  {
    "Manufacturer": "Fendt",
    "Model": "828 Vario",
    "Color": "Green",
    "Year": "2010"
  },
  {
    "Manufacturer": "Schlüter",
    "Model": "1500 TVL",
    "Color": "Red",
    "Year":"1981"
  },
  {
    "Manufacturer": "Case IH",
    "Model": "Magnum CVX",
    "Color": "Red",
    "Year":"1987"
  },
  {
    "Manufacturer": "New Holland",
    "Model": "T5",
    "Color": "Blue",
    "Year":"2017"
  }
}

function showTractorInfo()
{
  document.getElementById("tractorInformation").innerHTML = "Manufacturer: " + tractor.manufacturer
                + "<br>Model:" + tractor.model + "<br>Color:" + tractor.color + "<br>Year:"
                + tractor.year;
}
