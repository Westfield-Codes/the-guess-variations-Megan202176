/* Simple Guess Program */

// define function guessGame

  // generate a random integer 1-100

  // display the integer for testing purposes only

  // create guess and set equal to 0 

  // loop while guess is not equal to answer

    // set guess equal to asking user to "Guess a number, 1-100"

    // if guess equals answer display "Correct!" 

    // or if guess is greater than answer display "Too high!" 

    // or if guess is less than answer display "Too low!" 

    // else say "Bad input"

  // end the loop

// end the function
function guessGame(){
  let answer = Math.floor(Math.random()*100)+1;
 alert(answer)
  let guess=0;
  while(guess!=answer){
    guess= prompt("Guess a number, 1-100")
    if(guess==answer) alert("Correct!")
    else if(guess>answer) alert("Too high!")
    else if(guess<answer) alert("Too low!")
    else alert("Bad input")
  }
}