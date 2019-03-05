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
  var myVFinder2 = new vFinder("Title 3 Info");
  var myVFinder3 = new vFinder("Title 4 Info");
  var myVFinder4 = new vFinder("Title 5 Info");
  myVFinderArray.push(myVFinder);
  myVFinderArray.push(myVFinder1);
  myVFinderArray.push(myVFinder2);
  myVFinderArray.push(myVFinder3);
  myVFinderArray.push(myVFinder4);
}

function  accessInfo() {

  //console.log(myVFinder.toString());
  //console.log(myVFinder.theTitle);
  document.getElementById("title").innerHTML = myVFinderArray[0].toString();
}
