var myVFinderArray = new Array();
var imgPath = ["imgs/one.jpg", "imgs/two.jpg", "imgs/three.jpg", "imgs/four.jpg", "imgs/five.jpg"];
class vFinder {
  constructor(title,image,description,author,year) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.author = author;
    this.year = year;
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
  var randomNumber = Math.floor(Math.random() * 5);
  //console.log(myVFinder.toString());
  //console.log(myVFinder.theTitle);
  document.getElementById("title").innerHTML = myVFinderArray[randomNumber].toString();
  document.getElementById("image").innerHTML = myVFinderArray[randomNumber].toString();
  document.getElementById("description").innerHTML = myVFinderArray[randomNumber].toString();
  document.getElementById("author").innerHTML = myVFinderArray[randomNumber].toString();
  document.getElementById("year").innerHTML = myVFinderArray[randomNumber].toString();
}
