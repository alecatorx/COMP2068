// INSTALL PACKAGES
const prompt = require('prompt');

// INPUT
// call prompt.get() to obtain input from user > R
prompt.start();
prompt.get(["hand"], function (error, result){

// generate input from the computer > R
let com = Math.random();
comHand = com <= 0.34 ? "rock" : com <= 0.67 ? "paper" : "scissors";
console.log(`Your hand: ${result.hand}`);
console.log(`My hand: ${comHand}`);

// PROCESS
// if else
// determine winner
if (result.hand == "rock"){
    if (comHand == "paper"){
        console.log("You Lose :(");
    }
    else if (comHand == "scissors"){
        console.log("You Win :D");
    }
    else {
        console.log("It's a draw!");
    }
}
else if (result.hand == "paper"){
    if (comHand == "scissors"){
        console.log("You Lose :(");
    }
    else if (comHand == "rock"){
        console.log("You Win :D");
    }
    else {
        console.log("It's a draw!");
    }
}
else if (result.hand == "scissors"){
    if (comHand == "rock"){
        console.log("You Lose :(");
    }
    else if (comHand == "paper"){
        console.log("You Win :D");
    }
    else {
        console.log("It's a draw!");
    }
}
else {
    console.log("Invalid input.");
}

})

// OUTPUT
console.log('result');