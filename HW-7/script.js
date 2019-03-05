class VFinder {
  constructor(title) {
    this.title = title;
  }
toString() {
  return "Title: " + this.title;
  }
get title() {
    return  this.title;
  }
}

function  accessInfo() {
  var myVFinder = new VFinder("Title 1 Info");
  console.log(myVFinder.toString());
  console.log(myVFinder.title);

}
