console.log('Hello, Pac-Man!');
console.log('Pac-Man eats ghosts for lunch.');
// I am a comment!
// var ghost = "Blinky!"; // <<--this variable assignment is not a comment, but everything after the // in this sentence is a comment.
/*
Each
of
these
lines
are
comments
*/

// var ghosts = ['Inky','Blinky','Pinky','Clyde'];
//
// console.log('There are ' + ghosts.length + 'ghosts.');
// console.log('Their names are: ');
// console.log(ghosts[0]);
// console.log(ghosts[1]);
// console.log(ghosts[2]);
// console.log(ghosts[3]);
//
// // var inky = {};
// // inky.colour = 'Cyan';
// // inky.personality = 'Shadow';
// // console.log(inky);
//
// var ghosts = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange' };
// console.log(ghosts);
//
// console.log(ghosts.inky); // => 'Cyan'
// console.log(ghosts.blinky); // => 'Red'
//
// // same as above
// console.log(ghosts['inky']); // => 'Cyan'
// console.log(ghosts['blinky']); // => 'Red'
//
var ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];

for (var index = 0; index < ghosts.length; index++) {
  console.log('Pac-Man eats ' + ghosts[index]);
}

var powerPelletEaten = false;
var ghosts = 4;

while (true) {
  console.log('Ghosts remaining: ' + ghosts);

  if (powerPelletEaten == false) {
    console.log('Pac-Man eats the power pellet.');
    powerPelletEaten = true;
  } else if (ghosts > 0) {
    console.log('Pac-Man eats a ghost.');
    ghosts--;
  } else {
    break;
  }
}

console.log('Pac-Man returns home after a long day in the maze.');

var ghost = 'Blinky';
var colour;

switch (ghost) {
  case 'Inky':
    colour = 'Cyan';
    break;
  case 'Blinky':
    colour = 'Red';
    break;
  case 'Pinky':
    colour = 'Pink';
    break;
  case 'Clyde':
    colour = 'Orange';
    break;
}

console.log(ghost + ' is the colour ' + colour);

// Named function
function eatDot() {
  console.log("MUNCH!");
}

// Anonymous function
// Here we assign the function to a variable instead of giving it a name directly
var eatDot = function() {
  console.log("MUNCH!");
}

var hero = 'Pac-Man'
hero.toUpperCase;
// [Function: toUpperCase] // no (), so we didn't call this function
hero.toUpperCase();
// 'PAC-MAN' // now we have (), so we did call this function
hero.length;
// 7 // length returned 7, the number of characters in 'Pac-Man', because length is a property of the String type, not a function of the String type

var highScores = [];
function addHighScore(highScoreList, playerInitials, score) {
   var record = { player: playerInitials, score: score };
   highScoreList.push(record); // add record to array
 }
highScores
// [] // empty array to start
addHighScore(highScores, 'SDL', 2000);
highScores
// [ { player: 'SDL', score: 2000 } ]
addHighScore(highScores, 'JSL', 10000);
highScores
// [ { player: 'SDL', score: 2000 },
 // { player: 'JSL', score: 10000 } ]

 function addScore(currentScore, eaten) {
  switch (eaten) {
  case 'dot':
    scoreToAdd = 10;
    break;
  case 'powerPellet':
    scoreToAdd = 50;
    break;
  case 'firstGhost':
    scoreToAdd = 200;
    break;
  case 'secondGhost':
    scoreToAdd = 400;
    break;
  }

  return currentScore + scoreToAdd;
}

var score = 0;

score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'powerPellet');
score = addScore(score, 'firstGhost');
console.log('Your score: ' + score);
