var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"]
var randomNumber = Math.floor(Math.random() * 4);
var randomChosenColour = randomNumber;


function nextSequence(){
    randomNumber = Math.floor(Math.random() * 4);
    gamePattern.push(buttonColours[randomNumber])
    console.log(gamePattern)
}
