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
  var myVFinder = new vFinder("Yellow Triangle","imgs/one.jpg","1/3 of the Tri-Force","Link","Nov 1998");
  var myVFinder1 = new vFinder("Cyan Square","imgs/two.jpg","Not quite sad, not quite hip.","Random Average Guy","2019");
  var myVFinder2 = new vFinder("Red Rupee","imgs/three.jpg","Worth 20 Green Rupees in Hyrule.","Biggoron","When You're Older");
  var myVFinder3 = new vFinder("Purple Pentagon","imgs/four.jpg","Barney's Intel HQ.","PBS","1992-2009");
  var myVFinder4 = new vFinder("Green Circle","imgs/five.jpg","Don't break the cipher!","Thurgood Jenkins","1998");
  myVFinderArray.push(myVFinder);
  myVFinderArray.push(myVFinder1);
  myVFinderArray.push(myVFinder2);
  myVFinderArray.push(myVFinder3);
  myVFinderArray.push(myVFinder4);
}

function  accessInfo() {
  var randomNumber = Math.floor(Math.random() * imgPath.length);
  //console.log(myVFinder.toString());
  //console.log(myVFinder.theTitle);
  document.getElementById("title").innerHTML = myVFinderArray[randomNumber].toString();
  document.getElementById("image").src = imgPath;
  document.getElementById("description").innerHTML = myVFinderArray[randomNumber].toString2();
  document.getElementById("author").innerHTML = myVFinderArray[randomNumber].toString3();
  document.getElementById("year").innerHTML = myVFinderArray[randomNumber].toString4();
}
