function getChoice1() {
  var userChoice = document.getElementById('choice').value;
  var gameProposal = document.getElementById('proposal');
  if(userChoice === 'Stay','stay')  {

    document.getElementById('choice').style.display="none";
    document.getElementById('buttonSubmit').style.display="none";

    document.getElementById('choice1').style.display="block";
    document.getElementById('buttonSubmit1').style.display="block";

    document.getElementById('choice2').style.display="none";
    document.getElementById('buttonSubmit2').style.display="none";

    document.getElementById('choice3').style.display="none";
    document.getElementById('buttonSubmit3').style.display="none";

    gameProposal.innerHTML = "Proposal1";
  }
  else if (userChoice ==='Go','go') {
    gameProposal.innerHTML = "Proposal2";
  }
  else {
    gameProposal.innerHTML = "Invalid Response";
  }
}
