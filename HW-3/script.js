/*
  Author: Eric Wilsey
  Date: Feb 2nd, 2019
  Purpose of this script: Values - Data types.
*/

var favoriteRestaurant = "Good Burger\tRestaurant";
var favoriteNumber = 22;
var otherVariable = null;
var isAlive = true; //boolean
var secondNumber = 13;
const myName = "Eric";

console.log(myName + "'s favorite restaurant is " + favoriteRestaurant); //string + stringLit + string
console.log(favoriteNumber % secondNumber);
console.log(otherVariable);
console.log(isAlive);
console.log(favoriteNumber + secondNumber + myName);
console.log(myName + favoriteNumber + secondNumber); //secrets
console.log(typeof(favoriteRestaurant));
console.log(typeof(favoriteNumber));

function test(){
  let favoriteNumber =8; //local variable
  // favoriteNumber =9; //global variable
  console.log(favoriteNumber);
  var name = window.prompt("What is YOUR name?");

}

test();
console.log(favoriteNumber);
