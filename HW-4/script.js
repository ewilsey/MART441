function getChoice1() {
  var myChoice = document.getElementById('choice').value;
  var myQuestion = document.getElementById('question');
  if(myChoice ==="Stay","stay") {
    myQuestion.innerHTML = "Have you listened to nothing I have told you? You have surely sealed your fate.";
  }
  else if(myChoice ==="Go","go")  {
    myQuestion.innerHTML = "The first step forward is the fist step towards success.";
  }
  else {
    myQuestion.innerHTML = "Ivalid Answer"
  }
}
