function getChoice1() {
  var userChoice = document.getElementById('choice').value;
  var gameProposal = document.getElementById('proposal');
  if(userChoice === 'Stay','stay')  {
    gameProposal.innerHTML = "Proposal1";
  }
  else if (userChoice ==='Go','go') {
    gameProposal.innerHTML = "Proposal2";
  }
  else {
    gameProposal.innerHTML = "Invalid Response";
  }
}
