$(document).ready(function() {

    var magic8Ball = {};
    magic8Ball.listofAnswers = ["yes", "no", "maybe", "try again later", "without a doubt", "Never in a million years"];

    magic8Ball.askQuestion = function(question){
        var randomNumber = Math.random();
        var randomIndex = randomNumber * this.listofAnswers.length;
        var roundedIndex = Math.floor(randomIndex);
        var pickedAnswer = this.listofAnswers[roundedIndex];
    
        $("#answer").text(pickedAnswer);

        console.log(question);
        console.log(answer);
    };
    
    
    var buttonPressed = function() {
        var question = prompt ("What would you like to know? (Ask a yes/no question)");
        magic8Ball.askQuestion(question);
    };
    
    $("#questionButton").click(buttonPressed);
    
    });