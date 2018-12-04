var parsedPlayer = JSON.parse(localStorage.getItem("playerObjStats"));
var parsedComputer = JSON.parse(localStorage.getItem("computerObjStats"));
console.log(parsedComputer.name);
document.getElementById("browser_name").innerHTML = parsedComputer.name;
document.getElementById("players_name1").innerHTML = parsedPlayer.name;
document.getElementById("totalGamesPlayedP").innerHTML = parsedPlayer.totalGames;
document.getElementById("totalGamesPlayedC").innerHTML = parsedComputer.totalGames;
document.getElementById("playerStats").innerHTML = parsedPlayer.totalWins;
document.getElementById("computerStats").innerHTML = parsedComputer.totalWins;
document.getElementById("playerRatio").innerHTML = (parsedPlayer.totalWins + ":" +parsedPlayer.totalLoss);
document.getElementById("computerRatio").innerHTML = (parsedComputer.totalWins + ":"+ parsedComputer.totalLoss);


var pRockStat = Math.round((parsedPlayer.numRock/parsedPlayer.totalGames)*100);
var pPaperStat = Math.round((parsedPlayer.numPaper/parsedPlayer.totalGames)*100);
var pScissStat = Math.round((parsedPlayer.numSciss/parsedPlayer.totalGames)*100);
var cRockStat = Math.round((parsedComputer.numRock/parsedComputer.totalGames)*100);
var cPaperStat = Math.round((parsedComputer.numPaper/parsedComputer.totalGames)*100);
var cScissStat = Math.round((parsedComputer.numSciss/parsedComputer.totalGames)*100);

if(!pRockStat){
  document.getElementById("prStat").innerHTML = "0%";
}
else{
  document.getElementById("prStat").innerHTML = pRockStat+"%";
}

if(!pPaperStat){
  document.getElementById("ppStat").innerHTML = "0%";
}
else{
  document.getElementById("ppStat").innerHTML = pPaperStat+"%";
}

if(!pScissStat){
  document.getElementById("psStat").innerHTML = "0%";
}
else{
  document.getElementById("psStat").innerHTML = pScissStat+"%";
}

if(!cRockStat){
  document.getElementById("crStat").innerHTML = "0%";
}
else{
  document.getElementById("crStat").innerHTML = cRockStat+"%";
}

if(!cPaperStat){
  document.getElementById("cpStat").innerHTML = "0%";
}
else{
  document.getElementById("cpStat").innerHTML = cPaperStat+"%";
}

if(!cScissStat){
  document.getElementById("csStat").innerHTML = "0%";
}
else{
  document.getElementById("csStat").innerHTML = cScissStat+"%";
}
