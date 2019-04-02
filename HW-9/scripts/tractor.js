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

$(document).ready(function () {
    $("button").click(function () {
      $.getJSON("tractor.js", function(result){
        $.each(result, function(i, field){
          $("div").append(field + " ");
          });
        });
      });
    });
