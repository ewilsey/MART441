function getChoice1() {
  var myChoice = document.getElementById('choice').value;
  var myQuestion = document.getElementById('question');
  if(myChoice === "Stay") {

    document.getElementById('choice').style.display="none";
    document.getElementById('btnSubmit').style.display="none";

    document.getElementById('choice2').style.display="block";
    document.getElementById('btnSubmit2').style.display="block";

    myQuestion.innerHTML = "Have you listened to nothing I have told you? You have surely sealed your fate. Would you like to play again?";
  }
  else if(myChoice === "Go")  {
    myQuestion.innerHTML = "The first step forward is the fist step towards success and your first step out of the door and into a brand new world. You see a large parking lot. Will you turn RIGHT and head down the dark alley? Or will you turn LEFT and heads towards the bustop?";
  }
  else {
    myQuestion.innerHTML = "Invalid Answer";
  }
}

function getChoice2() {
  var myChoice = document.getElementById('choice2').value;
  var myQuestion = document.getElementById('question');
  if(myChoice === "Yes") {

    document.getElementById('choice').style.display="block";
    document.getElementById('btnSubmit').style.display="block";

    document.getElementById('choice2').style.display="none";
    document.getElementById('btnSubmit2').style.display="none";

    myQuestion.href ="https://ewilsey.github.io/MART441/HW-4/";
  }
  else {
    myQuestion.innerHTML = "Invalid Answer";
  }
}
