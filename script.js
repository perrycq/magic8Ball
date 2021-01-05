var answers = ["yes", "no", "maybe", "try again later", "without a doubt", "Never in a million years"];
var question = prompt ("What would you like to know?");
var randomNumber = Math.random();
var randomIndex = randomNumber * answers.length;
var roundedIndex = Math.floor(randomIndex);
var pickedAnswer = answers[roundedIndex];
var magic8Ball = {};
magic8Ball.answeredQuestion = function (question, pickedAnswer){
console.log("Question: " + question); 
console.log("Answer: " + pickedAnswer);	
};

magic8Ball.answeredQuestion(question, pickedAnswer);