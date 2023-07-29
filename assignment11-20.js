"use strict";
// for testing only 
console.log('code is working ');
// Assignment 11
let friends = ["qasim", "zafyi", "hamza"];
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
// Assignment 12
let greetings = 'how are you ?';
console.log(`hi ${friends[0]}! \n  ${greetings}`);
console.log(`hi ${friends[1]}! \n  ${greetings}`);
console.log(`hi ${friends[2]}! \n  ${greetings}`);
// Assignment 13
let favouriteTransport = ['bike', 'car', 'cycle'];
function writeTransportStatement() {
    console.log(`i will go on $}`);
}
favouriteTransport.forEach(writeTransportStatement);
