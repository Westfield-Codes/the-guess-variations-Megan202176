function guessGame(){
  let answer = Math.floor(Math.random()*100)+1;
 alert(answer)
  let guess=0;
  while(guess!=answer){
    guess = prompt("Guess a number, 1-100")
    if(guess==answer) alert("Correct!")
    else if(guess>answer) alert("Too high!")
    else if(guess<answer) alert("Too low!")
    else alert("Bad input")
  }
}