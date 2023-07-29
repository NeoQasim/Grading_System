"use strict";
// testing code 
console.log('👍 code is  working ');
const promptSync = require('prompt-sync')();
// const result = promptSync()
// let askName = promptSync(`what's your name ?`)
// console.log(askName);
//Grading System 
let totalMarks = 500;
let obtainedMarks = promptSync('what are your marks  ');
let percentage = (obtainedMarks / totalMarks) * 100;
if (percentage >= 95 && percentage <= 100) {
    console.log(`your marks are ${percentage}% and your grade is A+`);
}
else if (percentage >= 90 && percentage <= 95) {
    console.log(`your marks are ${percentage}% and your grade is A`);
}
else if (percentage >= 80 && percentage <= 90) {
    console.log(`your marks are ${percentage}% and your grade is B`);
}
else if (percentage >= 70 && percentage <= 80) {
    console.log(`your marks are ${percentage}% and your grade is C`);
}
else if (percentage >= 50 && percentage <= 70) {
    console.log(`your marks are ${percentage}% and your grade is D`);
}
if (percentage >= 0 && percentage < 50) {
    console.log(`your marks are ${percentage}% and your result is not satisfactory`);
}
else {
    console.log('you entered an invalid result');
}
//here is the output
