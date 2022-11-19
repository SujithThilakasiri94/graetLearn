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

// const checkWinner = (avg1, avg2) => {
//     if (avg1 > avg2) {
//         console.log(`Dolphins wins 🏆 ${avg1}  vs ${avg2}`);
//     } else if (avg2 > avg1) {
//         console.log(`Koalas wins 🏆 ${avg2}  vs ${avg1}`);
//     } else {
//         console.log("No team wins the trophy ....");
//     }
// };

// let calcAverage = (score1, score2, score3) => {
//     let avg = (score1 + score2 + score3) / 3;

//     console.log(avg);
//     checkWinner(avg);
// };

// calcAverage(44, 23, 71);
// calcAverage(0, 0, 0);

// const calcTip = (bill) => {

//     let tip = 0;

//     if (bill < 50) {

//         console.log("bill is lower than ");
//         tip = 0;

//     } else if (bill >= 50 && bill <= 300) {

//         tip = bill * 0.15;

//     } else

//         tip = bill * 0.2;

//     return tip;
// };

const bill = [125, 555, 44];
// const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
// console.log(`total values of the bills 

//     ${[bill[0] + tip[0]]} 
//     ${[bill[1] + tip[1]]} 
//     ${[bill[2] + tip[2]]}`);

const myFirstObject = {
    firstName: "Sujith",
    lastName: "Thilakasiri",
    age: 2022 - 1994,
    friends: ["me", "Sanjaya", "Lasa", "Udayanga"]
};

console.log(myFirstObject);

console.log(myFirstObject.age);

console.log(myFirstObject.friends);

console.log(myFirstObject["firstName"]);

console.log(myFirstObject["age"]);

const portion = "Name";

console.log(myFirstObject["last" + portion]);
console.log(myFirstObject["first" + portion], myFirstObject["last" + portion]);

myFirstObject.location = "Kurunegala";
myFirstObject["Email"] = "sujiththilakasiri@gmail.com";

console.log(myFirstObject.location);


console.log(`${myFirstObject.firstName} has ${myFirstObject.friends.length} friends and his best friend is called ${myFirstObject.friends[0]}`);