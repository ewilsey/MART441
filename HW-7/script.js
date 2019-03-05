var myVFinderArray = new Array();
var randArray = ["un", "deux", "trois", "quatre", "cinq"];
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
  return this.image;
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
  var myVFinder = new vFinder("imgs/one.jpg","Yellow Triangle","1/3 of the Tri-Force","Link","Nov 1998");
  var myVFinder1 = new vFinder("imgs/two.jpg","Cyan Square","Not quite sad, not quite hip.","Random Average Guy","2019");
  var myVFinder2 = new vFinder("imgs/three.jpg","Red Rupee","Worth 20 Green Rupees in Hyrule.","Biggoron","When You're Older");
  var myVFinder3 = new vFinder("imgs/four.jpg","Purple Pentagon","Barney's Intel HQ.","PBS","1992-2009");
  var myVFinder4 = new vFinder("imgs/five.jpg","Green Circle","Don't break the cipher!","Thurgood Jenkins","1998");
  myVFinderArray.push(myVFinder);
  myVFinderArray.push(myVFinder1);
  myVFinderArray.push(myVFinder2);
  myVFinderArray.push(myVFinder3);
  myVFinderArray.push(myVFinder4);
}

function  accessInfo() {
  var randomNumber = Math.floor(Math.random() * randArray.length);
  //console.log(myVFinder.toString());
  //console.log(myVFinder.theTitle);
  document.getElementById("title").innerHTML = myVFinderArray[randomNumber].toString();
  document.getElementById("image").src = myVFinderArray[randomNumber].toString1();
  document.getElementById("description").innerHTML = myVFinderArray[randomNumber].toString2();
  document.getElementById("author").innerHTML = myVFinderArray[randomNumber].toString3();
  document.getElementById("year").innerHTML = myVFinderArray[randomNumber].toString4();
}
