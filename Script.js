 // Answer array
 var answers = ["It is certain", 
 "It is decidedly so", 
 "Without a doubt", 
 "Yes - definitely",
 "You may rely on it", 
 "As I see it, yes", 
 "Reflect and ask again", 
 "Outlook good", 
 "Yes", "Signs point to yes",
 "The stars do not favor this", 
 "My reply is no",
 "My sources say no", 
 "Outlook not so good",
 "Very doubtful", 
 "Reply hazy, try again", 
 "Ask again later", 
 "Better not tell you now",
 "Cannot predict now", 
 "All sources are busy, Please try again later"];

window.onload = function() {
var eight = document.getElementById("eight");
var answer = document.getElementById("answer");
var eightball = document.getElementById("eight-ball");
var question = document.getElementById("question");

eightball.addEventListener("click", function() {
if (question.value.length < 1) {
alert('Enter a question!');
} else {
eight.innerText = "";
var num = Math.floor(Math.random() * Math.floor(answers.length));
answer.innerText = answers[num];
}
});
};