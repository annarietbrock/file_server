var player = JSON.parse(localStorage.getItem("playerObjStats"));
var computer = JSON.parse(localStorage.getItem("computerObjStats"));

if(!player){
    console.log("player does not exist");
    var player = {
      name: "Player",
      totalGames: 0,
      totalWins: 0,
      totalLoss: 0,
      numRock: 0,
      numPaper: 0,
      numSciss: 0
    };


    var computer = {
      name:"Computer",
      totalGames: 0,
      totalWins: 0,
      totalLoss: 0,
      numRock: 0,
      numPaper: 0,
      numSciss: 0
    };
  }



if(player.name == "Player"){
  showOrNot(document.getElementById("enter_name"), true);
}
else{
  updateNames(player.name);
  showOrNot(document.getElementById("enter_name"), false);
  showOrNot(document.getElementById("throw_choice"), true);
}

updateStatistics();



function updateStatistics(){
  localStorage.setItem("playerObjStats", JSON.stringify(player));
  localStorage.setItem("computerObjStats", JSON.stringify(computer));
};


document.getElementById("enter_name_button").addEventListener("click", function(){
  var p_name = document.getElementById("enter_name_input").value;
  if(!p_name){
    showOrNot(document.getElementById("feedback"), true);
    document.getElementById("nameFeedbackBad").innerHTML = "Please enter a name to proceed";
  }

  else if (p_name == player.name){
    updateStatistics();
  }

  else{
    showOrNot(document.getElementById("feedback"), true);
    document.getElementById("nameFeedbackBad").innerHTML = "";
    document.getElementById("nameFeedbackGood").innerHTML = "Name successfully saved!";
    player.name = p_name;
    showOrNot(document.getElementById("enter_name"), false);
    showOrNot(document.getElementById("throw_choice"), true);
    updateNames(p_name);
  }

  });


function showOrNot(div_element, show){
  if(show && div_element.classList.contains("hidden")){
    div_element.classList.remove("hidden");
    div_element.classList.add("visible");
  }

  else if(!show && div_element.classList.contains("visible")){
    div_element.classList.remove("visible");
    div_element.classList.add("hidden");
  }
}

function updateNames(name){
  var name_spots = document.getElementsByClassName("player_name_span");
  for(var i = 0; i<name_spots.length; i++){
    name_spots[i].innerHTML = name;
  }

  updateStatistics();
}


function ResultTie(){
  player.totalGames+=1;
  computer.totalGames+=1;
  showOrNot(document.getElementById("game_results"), true);
  document.getElementById("resultsText").innerHTML = "Tie Game!";
  console.log("Tie");
}

function computerWins(){
  player.totalGames+=1;
  computer.totalGames+=1;
  computer.totalWins+=1;
  player.totalLoss+=1;
  showOrNot(document.getElementById("game_results"), true);
  document.getElementById("resultsText").innerHTML = "Computer Wins!";
  console.log("Computer Wins");
  console.log(computer.totalWins);
}

function playerWins(){
  player.totalGames+=1;
  computer.totalGames+=1;
  player.totalWins+=1;
  computer.totalWins+=1;
  showOrNot(document.getElementById("game_results"), true);
  document.getElementById("resultsText").innerHTML = (" "+ player.name + " Wins!");
  console.log("Player Wins");
  console.log(player.totalWins);
}


document.getElementById("pick_choice").addEventListener("click", function(){
  document.getElementById("nameFeedbackBad").innerHTML = "";
  document.getElementById("nameFeedbackGood").innerHTML = "";



  console.log("choice played");
  var chances = Math.random();
  console.log(chances);
  var computerThrowChoice;
  var playerThrowChoice = document.getElementById("Player_Throw_Choice").value;

  if(chances<=0.33){
    computerThrowChoice = "Rock";
    document.getElementById("computerSummary").innerHTML = ("The computer chose to throw rock!");
    computer.numRock+=1.0;
    var image = document.getElementById("Computer_Picture_Results");
    image.src = "images/Rock.png";
  }

  if(0.33<chances&&chances<=0.66){
    computerThrowChoice = "Scissors";
    document.getElementById("computerSummary").innerHTML = ("The computer chose to throw scissors!");
    computer.numSciss+=1;
    var image = document.getElementById("Computer_Picture_Results");
    image.src = "images/Scissors1.png";
  }

  if(0.66<chances&&chances<=1){
    computerThrowChoice = "Paper";
    document.getElementById("computerSummary").innerHTML = ("The computer chose to throw paper!");
    computer.numPaper+=1;
    var image = document.getElementById("Computer_Picture_Results");
    image.src = "images/Paper1.png";
  }

  if(playerThrowChoice== " "){
    console.log("null throw");
    showOrNot(document.getElementById("feedback"), true);

    document.getElementById("choiceFeedbackBad").innerHTML = ("Please select an object to throw.");
    showOrNot(document.getElementById("choiceFeedbackBad"), true);
    showOrNot(document.getElementById("game_results"), false);
    showOrNot(document.getElementById("throw_choice"), true);
    document.getElementById("Player_Throw_Choice").value = " ";

  }

  if(playerThrowChoice=="Paper"){
    document.getElementById("choiceFeedbackBad").innerHTML = "";
    player.numPaper+=1.0;
    document.getElementById("playerSummary").innerHTML = (player.name + " chose to throw paper!");
    var image = document.getElementById("Player_Picture_Results");
    image.src = "images/Paper2.png";
  }

  if(playerThrowChoice=="Scissors"){
    document.getElementById("choiceFeedbackBad").innerHTML = "";
    player.numSciss+=1.0;
    document.getElementById("playerSummary").innerHTML = (player.name + " chose to throw scissors!");
    var image = document.getElementById("Player_Picture_Results");
    image.src = "images/Scissors2.png";
  }

  if(playerThrowChoice=="Rock"){
    document.getElementById("choiceFeedbackBad").innerHTML = "";
    player.numRock+=1.0;
    document.getElementById("playerSummary").innerHTML = (player.name + " chose to throw rock!");
    var image = document.getElementById("Player_Picture_Results");
    image.src = "images/Rock2.png";
  }

  if((playerThrowChoice=="Paper" && computerThrowChoice == "Paper")||(playerThrowChoice=="Scissors" && computerThrowChoice == "Scissors")||(playerThrowChoice=="Rock" && computerThrowChoice == "Rock")){

    showOrNot(document.getElementById("throw_choice"), false);

    ResultTie();
  }

  if((playerThrowChoice =="Paper" && computerThrowChoice=="Scissors")||(playerThrowChoice =="Rock" && computerThrowChoice=="Paper")||(playerThrowChoice =="Scissors" && computerThrowChoice=="Rock")){

    showOrNot(document.getElementById("throw_choice"), false);

    computerWins();
  }

  if((playerThrowChoice =="Scissors" && computerThrowChoice=="Paper")||(playerThrowChoice =="Paper" && computerThrowChoice=="Rock")||(playerThrowChoice =="Rock" && computerThrowChoice=="Scissors")){

    showOrNot(document.getElementById("throw_choice"), false);

    playerWins();
  }
  updateStatistics();

});

document.getElementById("play_Again").addEventListener("click", function(){
  showOrNot(document.getElementById("game_results"), false);
  showOrNot(document.getElementById("throw_choice"), true);
  document.getElementById("Player_Throw_Choice").value = " ";
});
