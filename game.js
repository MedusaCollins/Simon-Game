var gamePattern = [];
var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"]
var randomNumber = Math.floor(Math.random() * 4);
var randomChosenColour = buttonColours[randomNumber];
var audio = new Audio('');
var userChosenColour = '';

function nextSequence(){
    randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(buttonColours[randomNumber])
    audio = new Audio("sounds/" + randomChosenColour + ".mp3");

    $("#"+ randomChosenColour).fadeOut().fadeIn();
    
}
nextSequence()
$(".btn").click(function (e) {
    userChosenColour = e.target.id;
    userClickedPattern.push(userChosenColour)
    console.log(userClickedPattern)
    audio.play();
})