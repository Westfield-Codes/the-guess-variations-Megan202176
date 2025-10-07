/* Simple Guess Program */

// define function guessGame
function guessGame(){
  // generate a random integer 1-100
 let answer = Math.floor(Math.random()*100)+1;
  // display the integer for testing purposes only
alert(answer)
  // create guess and set equal to 0 
let guess=0
  // loop while guess is not equal to answer or to "q"
  while(answer!=guess && answer!="q"){
    // set guess equal to asking user to "Guess a number, 1-100"
  guess= prompt("Guess a number 1-100.")
    // if guess equals "q" display "Quitter!"
  if( guess=="q") alert("Quitter!")
    // or if guess equals answer display "Correct!" 
  if( guess==answer) alert("Correct")
    // or if guess is greater than answer display "Too high!" 
  if( guess>answer) alert("Too high")
    // or if guess is less than answer display "Too low!" 
  if( guess<answer) alert("Too Low")
    // or say "Bad input"
else alert("Bad Input")
  // end the loop
}
// end the function
}