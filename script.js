/* Simple Guess Program */
function guessGame(){
let guess=0
let answer=Math.floor(Math.random()*100)+1;
alert (answer)
while(guess != answer) {
guess= prompt("Guess a number 1-100")
if (guess==answer) alert("Correct!") 
else if (guess>answer) alert("Too high!")
else alert("Too low!")
}
}