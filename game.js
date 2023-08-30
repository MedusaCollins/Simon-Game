var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"]
var randomNumber = Math.floor(Math.random() * 4);
var randomChosenColour = buttonColours[randomNumber];
var audio = new Audio('');

function nextSequence(){
    randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(buttonColours[randomNumber])
    audio = new Audio("sounds/" + randomChosenColour + ".mp3");

    $("#"+ randomChosenColour).fadeOut().fadeIn();
    
}
nextSequence()
$("#"+ randomChosenColour).click(function () {
    audio.play();
})