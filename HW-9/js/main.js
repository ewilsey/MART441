var grabRequest = new XMLHttpRequest();
grabRequest.open('GET', 'https://ewilsey.github.io/MART441/HW-9/json/tractos.json')
grabRequest.onload = function() {
  console.log(grabRequest.responseText);
};
grabRequest.send();
