/* Guess Game Program */
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
// define function newGame
function newGame(){
  // create a Boolean variable for again, set to true
  let again=true
  // run the guessGame function

  // loop as long as again is true 

    // ask to play again with again set to a confirm

    // if again is true run the guessGame function

    // close the loop

  // thank the player for playing

  // close the function
}

// create a function called guessGame

  // create guess and set equal to 0 

  // create tries and set equal to 0 

  // create variable answer and generate a random integer 1-100

  // display the integer for testing purposes only

  // loop while guess is not equal to answer

    // set guess equal to asking user to "Guess a number, 1-100"

    // add one to tries

    // if guess equals answer display "Correct in [tries] tries!" 

    // or if guess is "q" break the loop

    // or if guess is greater than answer display "Too high!" 

    // or if guess is less than answer display "Too low!" 

    // if it's none of those, say "Bad Input!"

    // end the loop

  // end the function
