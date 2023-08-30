var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

var gameStarted = false;
var level = 0;

function nextSequence(){
    userClickedPattern =  [];
    level++;
    $("h1").text("Level " + level)

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour)
    playSound(randomChosenColour)

    $("#"+ randomChosenColour).fadeOut().fadeIn();
    console.log("nextSequence")
}
$(".btn").click(function (e) {
    userChosenColour = e.target.id;
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

      //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
    checkAnswer(userClickedPattern.length-1);
    console.log("click")
})

function playSound(sound){
    var audio = new Audio("sounds/" + sound + ".mp3");
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

function checkAnswer(currentLevel){
if( gamePattern[currentLevel] === userClickedPattern[currentLevel]){

    console.log("Başarılı");

    if(userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
            nextSequence();
          }, 1000);
          console.log("checkAnswer")
    }
}else{ console.log("Başarısız")}
}