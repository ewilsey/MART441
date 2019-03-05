class vFinder {
  constructor(title) {
    this.title=title;
  }
toString() {
  return "Title: " + this.title;
  }
get title() {
    return  this.title;
  }
}

function  accessInfo() {
  var myVFinder = new vFinder("Title 1 Info");
  console.log(myVFinder.toString());
  console.log(myVFinder.title);
}
