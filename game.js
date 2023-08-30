var gamePattern = [];
var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"]
var randomNumber = Math.floor(Math.random() * 4);
var randomChosenColour = buttonColours[randomNumber];
var audio = new Audio('');
var userChosenColour = '';
var gameStarted = false;
var level = 0;

function nextSequence(){
    level++;
    $("h1").text("Level " + level)
    randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(buttonColours[randomNumber])
    playSound(randomChosenColour)

    $("#"+ randomChosenColour).fadeOut().fadeIn();
    
}
$(".btn").click(function (e) {
    userChosenColour = e.target.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
})

function playSound(sound){
    audio = new Audio("sounds/" + sound + ".mp3");
    audio.play();
}

function animatePress(currentColour){
$("." + currentColour).addClass("pressed")

setTimeout(function(){
    $("." + currentColour).removeClass("pressed")
}, 100)
}

$(document).keypress(function (e) { 
    if(!gameStarted){
        nextSequence();
        gameStarted = true;
    }
});