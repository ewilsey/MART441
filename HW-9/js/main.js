var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://ewilsey.github.io/MART441/HW-9/json/tractos.json')
myRequest.onload = function() {
  var myData = myRequest.responseText;
};
myRequest.send();
