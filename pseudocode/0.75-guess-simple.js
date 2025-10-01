/* Simple Guess Program */
// create variable called guess, set to 0

// create variable called answer and store a random integer 1-100

// display the answer for testing purposes only

// set guess equal to prompt asking user to "Guess a number, 1-100"

// if guess equals answer display "Correct!" 

// or if guess is greater than answer display "Too high!" 

// or display "Too low!" 
function guessGame(){
  let guess = 0;
  let answer = Math.floor(Math.random()*100)+1;
  //alert(answer);
  while(guess != answer) {
    guess=prompt("Guess a number 1-100")
    if (guess==answer) alert ("Correct!")
    else if (guess>answer) alert("Too high!")
    else alert("Too low!")
  }
}