var myVFinderArray = new Array();
class vFinder {
  constructor(title) {
    this.title = title;
  }
toString() {
  return "Title: " + this.title;
  }
get theTitle() {
  return this.title;
  }
}

function  initializeArray() {
  var myVFinder = new vFinder("Title 1 Info");
  var myVFinder1 = new vFinder("Title 2 Info");
  myVFinderArray.push(myVFinder);
  myVFinderArray.push(myVFinder1);
}

function  accessInfo() {

  //console.log(myVFinder.toString());
  //console.log(myVFinder.theTitle);
  document.getElementById("title").innerHTML = myVFinderArray[0].toString();
}
