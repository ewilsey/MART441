/*
  Author: Eric Wilsey
  Date: Feb 2nd, 2019
  Purpose of this script: Values - Data types.
*/

var favoriteRestaurant = "Good Burger\tRestaurant";
var favoriteNumber = 22;
var otherVariable = null;
var isAlive = true;
var secondNumber = 13;
const myName = "Eric";

console.log(myName + "'s favorite restaurant is " + favoriteRestaurant);
console.log(favoriteNumber % secondNumber);
console.log(otherVariable);
console.log(isAlive);
console.log(favoriteNumber + secondNumber + myName);
console.log(myName + favoriteNumber + secondNumber);
console.log(typeof(favoriteRestaurant));
console.log(typeof(favoriteNumber));

function test(){
  let favoriteNumber =8;
  console.log(favoriteNumber);
  var name = window.prompt("What is YOUR name?");
  console.log("Nice to meet you " + name);
}

test();
console.log(favoriteNumber);
