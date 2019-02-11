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
    myQuestion.innerHTML = "The first step forward is the fist step towards success and your first step out of the door and into a brand new world. You see a large parking lot. Will you turn RIGHT and head down the dark alley? Or will you turn LEFT and heads towards the bustop? The choice is yours: Right or Left?";

    document.getElementById('choice').style.display="none";
    document.getElementById('btnSubmit').style.display="none";

    document.getElementById('choice2').style.display="none";
    document.getElementById('btnSubmit2').style.display="none";

    document.getElementById('choice3').style.display="block";
    document.getElementById('btnSubmit3').style.display="block";

  }
  else {
    myQuestion.innerHTML = "Invalid Answer";
  }
}

function getChoice2() {
  var myChoice2 = document.getElementById('choice2').value;
  var myQuestion = document.getElementById('question');
  if(myChoice2 === "Yes") {

    document.getElementById('choice').style.display="block";
    document.getElementById('btnSubmit').style.display="block";

    document.getElementById('choice2').style.display="none";
    document.getElementById('btnSubmit2').style.display="none";

    myQuestion.innerHTML ="As a self-aware potato, your only mission is to survive. Simple? Many obstacles stand in your path. Many foes stand to gain noteriety from your defeat. Will you stay and become the baked potato you were once destined to become? Or will you go and rise above by transforming into something much greater? The choice is yours, but yours alone. Will you: Stay or Go?";
  }
  else {
    myQuestion.innerHTML = "Invalid Answer";
  }
}

function getChoice3() {
  var myChoice3 = document.getElementById('choice3').value;
  var myQuestion = document.getElementById('question');
  if(myChoice3 === "Right") {

    document.getElementById('choice').style.display="none";
    document.getElementById('btnSubmit').style.display="none";

    document.getElementById('choice2').style.display="block";
    document.getElementById('btnSubmit2').style.display="block";

    document.getElementById('choice3').style.display="none";
    document.getElementById('btnSubmit3').style.display="none";

    document.getElementById('choice4').style.display="none";
    document.getElementById('btnSubmit4').style.display="none";

    myQuestion.innerHTML = "Really? A dark alley! Have you listened to nothing I have told you? You have surely sealed your fate. Would you like to play again?";
  }
  else if(myChoice3 === "Left")  {

    document.getElementById('choice').style.display="none";
    document.getElementById('btnSubmit').style.display="none";

    document.getElementById('choice2').style.display="none";
    document.getElementById('btnSubmit2').style.display="none";

    document.getElementById('choice3').style.display="none";
    document.getElementById('btnSubmit3').style.display="none";

    document.getElementById('choice4').style.display="block";
    document.getElementById('btnSubmit4').style.display="block";

    myQuestion.innerHTML = "Phew. You've made it to the bustop relatively no worse for the wear. From here you can go UPTOWN or DOWNTOWN. What will you choose: Uptown or Downtown?";
  }
  else {
    myQuestion.innerHTML = "Invalid Answer";
  }
}

function getChoice4() {
  var myChoice4 = document.getElementById('choice4').value;
  var myQuestion = document.getElementById('question');
  if(myChoice4 === "Uptown") {

    document.getElementById('choice').style.display="none";
    document.getElementById('btnSubmit').style.display="none";

    document.getElementById('choice2').style.display="block";
    document.getElementById('btnSubmit2').style.display="block";

    myQuestion.innerHTML = "You've truly made it. At least this far, and at least for now. Would you like to play again?";
  }
  else if(myChoice4 === "Downtown")  {
    myQuestion.innerHTML = "Downtown, isn't exactly perfect. Well you could stay here and that's fine. Or you can go back there, Uptown -where you should have gone last time. What will you do? The choices is yours: Here or There?";

    document.getElementById('choice').style.display="none";
    document.getElementById('btnSubmit').style.display="none";

    document.getElementById('choice2').style.display="none";
    document.getElementById('btnSubmit2').style.display="none";

    document.getElementById('choice3').style.display="none";
    document.getElementById('btnSubmit3').style.display="none";

    document.getElementById('choice4').style.display="none";
    document.getElementById('btnSubmit4').style.display="none";

    document.getElementById('choice5').style.display="block";
    document.getElementById('btnSubmit5').style.display="block";

  }
  else {
    myQuestion.innerHTML = "Invalid Answer";
  }
}
