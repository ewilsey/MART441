// create an array of image names that correspond to the image tags
var imgTags = ["img1", "img2", "img3", "img4"];
// create a variable with the blank image name
var blankImgPath = "imgs/blank.jpg";
// create a empty array for the actual images
var actualImgs = new Array();

function printBlanks()
{
   // call our random image creation function
    createRandomImgArray();
    // create a for loop
    for(var i = 0; i < imgTags.length; i++)
    {
    // iterate through the image tag ids and sets the source
        document.getElementById(imgTags[i]).src= blankImgPath;
    }



}

function createRandomImgArray()
{
    // create an array of actual images
    var actualImgPath = ["imgs/one.jpg", "imgs/two.jpg"];
    // create another array to make sure the images only get added twice
    var count = [0,0];
    // create a while statement to check to see if our actual image array is full
    while(actualImgs.length < 4)
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

function flipImg(number)
{
    document.getElementById(imgTags[number]).src= actualImgs[number];
        // this should be a quick function that just changes
        // the image based on what number was pressed


}
