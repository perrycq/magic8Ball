$(document).ready(function() {

    var magic8Ball = {};
    var answers = ["yes", "no", "maybe", "try again later", "without a doubt", "Never in a million years"];
    var randomNumber = Math.random();
    var randomIndex = randomNumber * answers.length;
    var roundedIndex = Math.floor(randomIndex);
    var pickedAnswer = answers[roundedIndex];
    var answerReturn = document.getElementById("answer");
    
    var buttonPressed = function() {
        var question = prompt ("What would you like to know?");
        answerReturn.innerText(pickedAnswer);
    };
    
    $("#questionButton").click(buttonPressed);
    
    });