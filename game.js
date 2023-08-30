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
    console.log(currentColour)
$("." + currentColour).addClass("pressed")
setTimeout(function(){
    $("." + currentColour).removeClass("pressed")
}, 100)
}