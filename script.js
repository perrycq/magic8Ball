$(document).ready(function() {

    var magic8Ball = {};
    magic8Ball.listofAnswers = ["yes", "no", "maybe", "try again later", "without a doubt", "Never in a million years"];

    magic8Ball.askQuestion = function(question){
        $("#answer").fadeIn(4000);
        $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
        
        var randomNumber = Math.random();
        var randomIndex = randomNumber * this.listofAnswers.length;
        var roundedIndex = Math.floor(randomIndex);
        var pickedAnswer = this.listofAnswers[roundedIndex];

        $("#answer").text(pickedAnswer);

        console.log(question);
        console.log(pickedAnswer);
    };

    $("#answer").hide();
    
    var buttonPressed = function() {
        $("#answer").hide();
        $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
        setTimeout(
            function() {
        var question = prompt ("What would you like to know? (Ask a yes/no question)");
        $("#8ball").effect("shake");
        magic8Ball.askQuestion(question);
    }, 500);
    };
    
    $("#questionButton").click(buttonPressed);
    
    });