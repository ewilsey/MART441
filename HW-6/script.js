// create an array of image names that correspond to the image tags
var imgTags = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10"];
// create a variable with the blank image name
var blankImgPath = "imgs/blank.jpg";
var firstNumber = -1;
var secondNumber = -1;

//JSON declaration
var player = {"firstName": "", "lastName":"", "age":""};


// create a empty array for the actual images
var actualImgs = new Array();

function printBlanks(){
   // call our random image creation function
    createRandomImgArray();
    // create a for loop
    for(var i = 0; i < imgTags.length; i++)
    {
    // iterate through the image tag ids and sets the source
        document.getElementById(imgTags[i]).src= blankImgPath;
    }



}

function createRandomImgArray(){
    // create an array of actual images
    var actualImgPath = ["imgs/one.jpg", "imgs/two.jpg", "imgs/three.jpg", "imgs/four.jpg", "imgs/five.jpg"];
    // create another array to make sure the images only get added twice
    var count = [0,0,0,0,0];
    // create a while statement to check to see if our actual image array is full
    while(actualImgs.length < 10)
    {
        // get a random number between 0 and the number total number of images that we can choose from
        var randomNumber = Math.floor(Math.random() * actualImgPath.length)
          // create an if statement that says if the total number added is less than 2, then
        // add the image to the actual image array
        if(count[randomNumber] < 2)
        {
            actualImgs.push(actualImgPath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] + 1;
        }
    }





}

function flipImg(number){

    if(firstNumber >= 0){
      secondNumber = number;
      document.getElementById(imgTags[number]).src = actualImgs[secondNumber];
      setTimeout(imgsDisappear,1000);
  }
    else if (firstNumber < 0) {
      firstNumber = number;
      document.getElementById(imgTags[firstNumber]).src= actualImgs[firstNumber];
    }





}

function imgsDisappear(){
    document.getElementById(imgTags[firstNumber]).src= blankImgPath;
    document.getElementById(imgTags[secondNumber]).src= blankImgPath;
}

// add to the JSON from the textboxes
function addToPlayer()
{
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var age = document.getElementById("txtAge").value;



    //console.log(firstName);
    player.firstname = firstName;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "game.html";

    //console.log(lastName);
    player.lastname = lastName;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "game.html";

    //console.log(age);
    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "game.html";
}

// get the information out of JSON
function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    console.log(player.firstname);
    console.log(player.lastname);
    console.log(player.age);
}
