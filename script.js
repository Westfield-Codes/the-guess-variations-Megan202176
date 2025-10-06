function newGame(){
  let again=true
  let games=0
while (again==true) {
    games ++
    if(games>1) {
      again=confirm("Play again?")
     }
    guessGame();
    }
}

function guessGame(){
  let answer = Math.floor(Math.random()*100)+1;
  alert(answer)
  let guess=0
  while(guess!=answer && guess!="q"){
  guess=prompt("Guess a number 1-100!")
  if(guess=="q") alert("Quitter!")
  else if (guess==answer) alert("Correct!")
  else if (guess>answer) alert("Too high!")
  else if (guess<answer) alert("Too low!")
  else alert("Bad input")
  }
}


