var userName = 'Jesse';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!') ;

const userQuestion = 'Will this code run' ;

userQuestion ? console.log(`${userName}, you asked ${userQuestion}`) : ('You did not enter a question!')

var randomNumber = Math.floor(Math.random() * 8);

if (randomNumber === 0) {
  eightBall = 'It is certain'
} else if (randomNumber === 1) {
 eightBall = 'Reply hazy try again'
} else if (randomNumber === 2) {
  eightBall = 'Cannot predict now'
}else if (randomNumber === 3) {
  eightBall = 'Do not count on it'
} else if (randomNumber === 4) {
  eightBall = 'My sources say no'
} else if (randomNumber === 5) {
  eightBall = 'Outlook not so good'
} else if (randomNumber === 6) {
  eightBall = 'Signs point to yes'
} else if(randomNumber === 7) {
  eightBall = 'All circuits are busy'
};

console.log(`${userName}, The spirits are telling me ${eightBall}`)
