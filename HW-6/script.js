// create an array of image names that correspond to the image tags
var imgTags = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10"];
// create a variable with the blank image name
var blankImgPath = "imgs/blank.jpg";
var firstNumber = -1;
var secondNumber = -1;
var numGuessed = 0;

//JSON declaration
var player = {"firstName": "", "lastName":"", "age":"", "numGuessed": ""};


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

  //make 2nd img appear
    if(firstNumber >= 0){
      secondNumber = number;
      document.getElementById(imgTags[number]).src = actualImgs[secondNumber];

  }
    else if (firstNumber < 0) { //make 1st img appear
      firstNumber = number;
      document.getElementById(imgTags[firstNumber]).src= actualImgs[firstNumber];
    }
    // check to see if imgs are not matching
    if(actualImgs[secondNumber] != actualImgs[firstNumber] && firstNumber >= 0 && secondNumber >= 0){
      setTimeout(imgsDisappear,1000); // calls method after set time
      numGuessed += 1;
      return numGuessed;
    }
    //check to see if imgs are matching
    else if(actualImgs[secondNumber] == actualImgs[firstNumber] && firstNumber >= 0 && secondNumber >= 0){
      firstNumber = -1;
      secondNumber = -1;
      numGuessed += 1;
      return numGuessed;
    }
}

function imgsDisappear(){
    document.getElementById(imgTags[firstNumber]).src= blankImgPath;
    document.getElementById(imgTags[secondNumber]).src= blankImgPath;
    firstNumber = -1;
    secondNumber = -1;
}

// add to the JSON from the textboxes
function addToPlayer(){
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
function playerInfo(){
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    console.log(player.firstname);
    console.log(player.lastname);
    console.log(player.age);
}

function completion(){
    player.numGuessed = numGuessed;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "stats.html";
    console.log(player.numGuessed);
}

function playerStats(){
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    console.log(player.firstname);
    console.log(player.lastname);
    console.log(player.age);
    console.log(player.numGuessed);
    document.getElementById("gameover").innerHTML = "Wow" + player.firstname + " " + player.lastname + "! For a " + "  " + player.age + " year old, " + "  " + player.numGuessed + " " + "guesses ain't half bad!";
}
