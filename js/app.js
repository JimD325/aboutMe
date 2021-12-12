'use strict'


let username =prompt( 'Hello! my name is Jim, what is your name?' ); // getting their name 
//console.log(username)
alert ('Hello ' + username + ' it is a pleasure to meet you!');

let congrats = 'correct!';
let wrong = 'incorrect =(';      // right/wrong responses to questions


let dogs = prompt('Now we can start with some basic facts about me. Yes or no, do you think I like dogs?').toLowerCase(); // using prompt and toLowerCase methods to remove case sensitivity for users input to the question. 
//console.log(dogs)

if (dogs === 'yes' || dogs === 'y') {
//console.log(congrats)
  alert(congrats);
}
else {
//console.log(wrong)
  alert(wrong);
}
let bbq = prompt('Do I enjoy barbeque?').toLowerCase()
if (bbq === 'yes' || bbq === 'y') {
alert(congrats)
}
else {
alert(wrong)
}
//console.log(bbq)
let vet = prompt('Am I a veteran?').toLowerCase()
if (vet === 'yes' || vet === 'y'){
alert(congrats)
}
else {
alert(wrong)
}
//console.log(vet)
let choc = prompt('Do I like chocolate?').toLowerCase()
if(choc === 'no' || choc === 'n'){
alert (congrats)
}
else {
alert (wrong)
}
//console.log(choc)
let hike = prompt('Do I like to hike?').toLowerCase()
if (hike === 'yes' || hike === 'y'){
alert (congrats)
}
else {
alert (wrong)
}
let attemptnumber = 0; 
let correctnum = 4


for ( let i = 0; i < 4; i++){
let numguess = prompt('What number am I thinking of between 1 and 10?')
if (numguess >= 5){
alert ('too high!');
}
    else if (numguess <= 3){
        alert ('too low!')
    }
    else if (numguess == 4){
        alert ('correct!')
        break;
    }
    if (i === 3){
        alert ('I was thinking of four, we can get it next time')
    }
}

function foodILike (){
  let answers = ['steak', 'cookies', 'burgers', 'jerky'];
  let attempt = 0;
  let rightGuess = false;
  let answer = prompt('What foods do I like to eat?')
    if(answers [i] === answer){
        alert ('You are right, I sure do love ' + answer)
        rightGuess = true;
    }
    else {
        alert('try again!')
    }

}