'use strict';


let username =prompt( 'Hello! my name is Jim, what is your name?' ); // getting their name
//console.log(username)
alert ('Hello ' + username + ' it is a pleasure to meet you!');

let congrats = 'correct!';
let wrong = 'incorrect =('; // right/wrong responses to questions
let totalRight = 0;

let dogs = prompt('Now we can start with some basic facts about me. Yes or no, do you think I like dogs?').toLowerCase(); // using prompt and toLowerCase methods to remove case sensitivity for users input to the question.
//console.log(dogs)

if (dogs === 'yes' || dogs === 'y') {
//console.log(congrats)
  alert(congrats);
  totalRight = totalRight +1;
}
else {
//console.log(wrong)
  alert(wrong);
}

let bbq = prompt('Do I enjoy barbeque?').toLowerCase();
if (bbq === 'yes' || bbq === 'y') {
  alert(congrats);
  totalRight = totalRight +1;
}
else {
  alert(wrong);
}
//console.log(bbq)
let vet = prompt('Am I a veteran?').toLowerCase();
if (vet === 'yes' || vet === 'y'){
  alert(congrats);
  totalRight = totalRight +1;
}
else {
  alert(wrong);
}
//console.log(vet)
let choc = prompt('Do I like chocolate?').toLowerCase();
if(choc === 'no' || choc === 'n'){
  alert (congrats);
  totalRight = totalRight +1;
}
else {
  alert (wrong);
}
//console.log(choc)
let hike = prompt('Do I like to hike?').toLowerCase();
if (hike === 'yes' || hike === 'y'){
  alert (congrats);
  totalRight = totalRight +1;
}
else {
  alert (wrong);
}



for ( let i = 0; i < 4; i++){
  let numguess = prompt('What number am I thinking of between 1 and 10?');
  if (numguess >= 5){
    alert ('too high!');
  }
  else if (numguess <= 3){
    alert ('too low!');
  }
  else if (numguess == 4){
    alert ('correct!');
    totalRight = totalRight +1;
    break;
  }
  if (i === 3){
    alert ('I was thinking of four, we can get it next time');
  }
}
let favFoods = ['cookies', 'steak', 'bacon']; //creating foods array
for ( let i = 0; i < 6; i++){ //for loop running 6 iterations
  let foodGuess = prompt ('What is one of my favorite foods?'); //prompting user input
  if (foodGuess === favFoods[0]){
    alert ('Yup, I love ' + foodGuess +'!');
    totalRight = totalRight +1;
    break;
  }
  else if (foodGuess === favFoods[1]){
    alert ('Yup, I love ' + foodGuess +'!');
    totalRight = totalRight +1;
    break;
  }
  else if (foodGuess === favFoods[2]){
    alert ('Yup, I love ' + foodGuess +'!');
    totalRight = totalRight +1;
    break;
  }
  else if ( i === 5){
    alert ('Nice try! But cookies, steak, and bacon are my favorite foods!');
  }
  else {
    alert ('Try again!');
  }
}

alert ('Thanks ' + username + ' for checking out my page!, your total number of correct answers was ' + totalRight);
