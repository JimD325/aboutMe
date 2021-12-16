'use strict';

function userName(); {
let userName =prompt( 'Hello! my name is Jim, what is your name?' ); // getting their name
//console.log(username)
alert ('Hello ' + userName + ' it is a pleasure to meet you!');
}
userName();

let congrats = 'correct!';
let wrong = 'incorrect =('; // right/wrong responses to questions
let totalRight = 0; //will count up the number of correct answers


let dogs = prompt('Now we can start with some basic facts about me. Yes or no, do you think I like dogs?').toLowerCase(); // using prompt and toLowerCase methods to remove case sensitivity for users input to the question.
//console.log(dogs)

if (dogs === 'yes' || dogs === 'y') {
//console.log(congrats)
  alert(congrats);
  totalRight = totalRight +1; //adds one to the number of correct answers
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
  let numguess = prompt('What number am I thinking of between 1 and 10?'); //always returns a string instead of a number, use parseint
  numguess = parseInt(numguess); // can use console.log(typeofnumguess); to get data type
  if (numguess >= 5){
    alert ('too high!');
  }
  else if (numguess <= 3){
    alert ('too low!');
  }
  else if (numguess === 4){
    alert ('correct!');
    totalRight = totalRight +1;
    break;
  }
  if (i === 3){
    alert ('I was thinking of four, we can get it next time');
  }
}
let favFoods = ['cookies', 'steak', 'bacon']; //creating foods array
// could change into a while (atemptsRemain && !answered correctly) loop similar to the class 03 review arrays replit https://replit.com/@rkgallaway/201-class-03-review-arrays-and-loops#index.js
let correctAnswer = false;
let attemptsLeft = 7;
while (attemptsLeft && !correctAnswer){
  let foodGuess = prompt ('What is one of my favorite foods?');
  for (let i = 0; i < 3; i++){
    if (foodGuess === favFoods[i]){
      alert ('Yup, I love ' + foodGuess +'!');
      totalRight = totalRight +1;
      correctAnswer = true;
    }
    // if (!correctAnswer){
    //   alert('Try again!');
    //   break;
    // }
  }
  if (!correctAnswer){
    alert('Try again!');
  }
  attemptsLeft--;
}
// for ( let d = 0; d < 6; d++){ //for loop running 6 iterations
//   let foodGuess = prompt ('What is one of my favorite foods?'); //prompting user input
//   if (foodGuess === favFoods[i]){ //embed within this if statement another for loop, using a different index value than i, remove the other two else if statements. Use booleans for this, they are your friend.
//     alert ('Yup, I love ' + foodGuess +'!');
//     totalRight = totalRight +1; //totalRight++
//     break;
//   }
//   // else if (foodGuess === favFoods[1]){
//   //   alert ('Yup, I love ' + foodGuess +'!');
//   //   totalRight = totalRight +1;
//   //   break;
//   // }
//   // else if (foodGuess === favFoods[2]){
//   //   alert ('Yup, I love ' + foodGuess +'!');
//   //   totalRight = totalRight +1;
//   //   break;
//   // }
//   else if ( d === 5){
//     alert ('Nice try! But cookies, steak, and bacon are my favorite foods!');
//   }
//   else {
//     alert ('Try again!');
//   }
// }

alert ('Thanks ' + username + ' for checking out my page!, your total number of correct answers was ' + totalRight);
