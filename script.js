// let mass , height , markHigherBMI , markBmi , johnBmi;

// console.log("Data set 1");
// console.log("----------------------------------------------------------------------------")

// mass = 78;
// height = 1.69;
// markBmi = (mass/(height**2));
// console.log("Mark's Weight = "+mass+" Height = "+height+"\t BMI = "+markBmi);


// mass = 92;
// height = 1.95;
// johnBmi = (mass/(height**2));
// console.log("John's Weight = "+mass+" Height = "+height+"\t BMI = "+johnBmi);


// // if(markBmi>johnBmi){
// //   markHigherBMI = true;
// // }
// markHigherBMI = markBmi > johnBmi;
// console.log(markHigherBMI);

// console.log("\n")
// console.log("\n")

// console.log("Data set 2");
// console.log("----------------------------------------------------------------------------")

// mass = 95;
// height = 1.88;
// markBmi = (mass/(height**2));
// console.log("Mark's Weight = "+mass+" Height = "+height+"\t BMI = "+markBmi);

// mass = 85;
// height = 1.76;
// johnBmi = (mass/(height**2));

// //using template literals
// console.log(`Mark's Weight = ${mass} Height =😊 ${height}         BMI = ${johnBmi} 😘 `);

// // if(markBmi>johnBmi){
// //   markHigherBMI = true;
// // }
// markHigherBMI = markBmi > johnBmi;
// console.log(markHigherBMI);

//-------------------------------------------------------------------------------------------------

//****************************************** switch ***********************************************

// const option = prompt("Enter a option : ");

// switch(option){

//     case "a" || "A" :
//         console.log(`Your option is : A`);
//     break;
//     case "b" || "B" :
//         console.log(`Your option is : B`);
//     break;
//     case "c" || "C" :
//         console.log(`Your option is : B`);
//     break;
//     default :
//         console.log(`Your option is Invalid !`);

// }

//---------------------------------------------------------------------------------------------

//*************************************** Ternary Operator ************************************

// const age = prompt `Enter your age :`;

// // const result = age >= 18 ? `can drink beer 🍺` : `can't drink beer 🍺 yet`;
// // console.log(result);

// console.log(`You ${ result = age >= 18 ? `can drink beer 🍺` : `can't drink beer 🍺 yet`}`);

//----------------------------------------------------------------------------------------------
// let tip = 0;
// let bill = prompt `Enter bill value :`;
// tip = bill < (50) ? "Bill is lower than 50" : `${bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100}`;
// console.log(`your tip = ${tip} bill = ${bill} total bill = ${Number(bill) + Number(tip)}`);