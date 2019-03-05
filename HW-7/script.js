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
toString1() {
  return "Image: " + this.image;
  }
toString2() {
  return "Description: " + this.description;
  }
toString3() {
  return "Author: " + this.author;
  }
toString4() {
  return "Year: " + this.year;
    }
get theTitle() {
  return this.title;
  }
get theImage() {
  return this.image;
  }
get theDescription() {
  return this.description;
  }
get theAuthor() {
  return this.author;
  }
get theYear() {
  return this.year;
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
  document.getElementById("image").innerHTML = myVFinderArray[randomNumber].toString1();
  document.getElementById("description").innerHTML = myVFinderArray[randomNumber].toString2();
  document.getElementById("author").innerHTML = myVFinderArray[randomNumber].toString3();
  document.getElementById("year").innerHTML = myVFinderArray[randomNumber].toString4();
}
