
// use console.log to audit program's integrity
    //create a random number to be matched by the gamer/player,
//  by using Math.random and  Math.floor to round the random number to an integer
$( document ).ready(function(){
var matchNumber=Math.floor(Math.random()*101+19)
console.log(matchNumber);
$('#match').text(matchNumber);

//	create variables and initialize them;
var crystalNumber = []
var yourScore= 0;	
var yourWins= 0;
var yourLosses = 0;
$('#wins').text(yourWins);
$('#losses').text(yourLosses);		

//create a random crystal number 
// by using Math.random and  Math.floor to round the random number to an integer
function randomCrystals(){
for (var i = 0; i < 4; i++) {
    var crystal = Math.floor(Math.random()*11+1);
    crystalNumber.push(crystal);
}
console.log(crystalNumber) 
}

randomCrystals();

//game reset
function reset(){
    matchNumber=Math.floor(Math.random()*101+19);
    console.log(matchNumber)
    $('#match').text(matchNumber);
    crystalNumber = [];
    randomCrystals();
    yourScore= 0;
    $('#score').text(yourScore);
    } 

//amend the score with gamer's winnings
function winner(){
alert("Bravo! Game match!");
    yourWins++;	
    $('#wins').text(yourWins);
    reset();
}

//amend the score with gamer's losses
function noWinner(){
alert ("Game over! Try again!");
    yourLosses++;
    $('#losses').text(yourLosses);
    reset();
}

//use JQuery to turn html #ids into buttons

    $('#ruby').on ('click', function(){
        yourScore = yourScore + crystalNumber[0];
        console.log("Score = " + yourScore);
        $('#score').text(yourScore + crystalNumber[0]);	
 //define "the winner" and the "no Winner"
                if (yourScore == matchNumber){
                    winner();
                }
                else if (yourScore > matchNumber){
                    noWinner();
                }		
    })	

    $('#sapphire').on ('click', function(){
        yourScore = yourScore + crystalNumber[1];
        $('#score').text(yourScore + crystalNumber[1]);	
        console.log("Score = " + yourScore);
//define "the winner" and the "no Winner"
                if (yourScore == matchNumber){
                    winner();
                }
                else if ( yourScore > matchNumber){
                    noWinner();
                }	
    })	

    $('#gold').on ('click', function(){
        yourScore = yourScore + crystalNumber[2];
        console.log("Score = " + yourScore);
        $('#score').text(yourScore + crystalNumber[2]);
//define "the winner" and the "no Winner"
                    if (yourScore == matchNumber){
                    yourScore = yourScore + crystalNumber[2];
                    winner();
                }
                else if ( yourScore > matchNumber){
                    yourScore = yourScore + crystalNumber[2];
                    noWinner();
                }	
    })	

    $('#emerald').on ('click', function(){
        yourScore = yourScore + crystalNumber[3];
        console.log("Score= " + yourScore);
        $('#score').text(yourScore + crystalNumber[3]);	
//define "the winner" and the "no Winner"
                    if (yourScore == matchNumber){
                    winner();
                }
                else if ( yourScore > matchNumber){
                    noWinner();
                }
    });  	

});	

