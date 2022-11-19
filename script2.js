// 'use strict';

// //using function declaration

// let birthYear = 0; 
// birthYear=prompt("Enter your birth year");

// function calAge(birthYear){
//     return(2022 - birthYear);
// }

// console.log(`your age is ${calAge(birthYear)} from function declaration`);

// //using function expression

// const age = function(birthYear){
//     return(2022 - birthYear);
// }

// console.log(`your age is ${age(birthYear)} from function expression 😋`);

// //****************************************************************************************** */

// //------------------------------------ Arrow Function ----------------------------------------

// const age2 = birthYear => 2022 - birthYear;

// console.log(`
// your age is ${age2(birthYear)} from Arrow 🏹 function`);

// let num1= prompt("Enter No 1");
// let num2 = prompt("Enter No 2");

// const calApp = (num1,num2) => {
//     const add = Number(num1) + Number(num2);  
//     const subtract = num1 - num2;
//     return `Add ${num1} + ${num2} = ${add} and subtraction = ${subtract}`;
// }
//  console.log (calApp(num1,num2));

//------------------------------- coding challenge #4 ---------------------------------------------

const checkWinner = (avg1,team1,avg2,team2) => {
    const winner = avg1 > avg2 ? (avg1,team1): (avg2,team2);
    return winner;
}

const calcAverage = (score1,score2,score3) => (score1 + score2 + score3 ) / 3;

const team1Avg = calcAverage(44,23,71);
const team2Avg = calcAverage(65,59,44);

console.log(checkWinner(21,"Dolphins",30,"Kolas"));

