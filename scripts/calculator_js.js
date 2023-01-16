//assign an html element to a variable.
//each document object has a query selector method
//which is a function accepting a class name as a parameter.

// let numBtns = document.querySelector(".num-container");
// let symBtns = document.querySelector(".sym-style");
// let display = document.querySelector(".cal-display");
const numBtns = document.querySelector(".num-container");
const symBtns = document.querySelector(".sym-style");
const display = document.querySelector(".cal-display");
//i am using an id because we only need one and it is essential, so why not?
const qlBtn = document.getElementById("qlPrtn");

let clcArr = [];
let numArr = [];
let xpArr = [];
let Arr = [];
let expression = 0;

let i = 0;
let j = 0;

let sum = 0;

//on the event that the NUMBTNS html is pressed
//i increments
//that indexed value is put in the calculator array
//and that is defined as a number from what the value in
//event.target.innerText in this instance
gtNum = numBtns.addEventListener("click", function (event) {
  i++;
  //coercion problem

  numArr[i] = parseInt(event.target.innerText);
  console.log(`this is the numArr[i] type ${typeof numArr[i]}`);
  console.log(`this is the type ${typeof event.target.innerText}`);

  display.innerText = numArr.join("");
  console.log( typeof display.innerText);
});

gtSym = symBtns.addEventListener("click", function (event) {
  console.log(typeof event.target.innerText);
  i++;
  numArr[i] = parseInt(event.target.innerText);
  // display.innerText = clcArr.join("");
  console.log(`this is the parsed symbol ${numArr[i]}`);
  console.log(numArr.join(""));
});

// //equal operations defined
// qlBtn.addEventListener("click", function (event) {
//   // display.innerText = expression;
//   // console.log(eval(expression));
 
//   switch (num_array_param) {
//     case "+":
//       sum += numArr[i];
//       console.log("+");
//       break;
//     case "-":
//       sum -= numArr[i];
//       console.log("-");
//       break;
//     case "*":
//       sum *= numArr[i];
//       console.log("*");
//       break;
//     case "/":
//       sum /= numArr[i];
//       console.log("/");
//       break;
//     default:
//       display.innerText = sum;
//   }
// });
/*
function xpHndlr(Arr){

j++;
while(xpArr.length > 0 && xpArr[j] ==='=' ){
   i=0;j=0; j++;
   let lftSdXp=[];
   lftSdXp[i]=xpArr[j];
   if(xpArr[j] === '+'|'-'|'/'|'*' && xpArr[j] <= xpArr.length ){
     let operator = xpArr[j];
     j = j+1;
     j++;
     let rghtSdXp = xpArr[j]
      console.log(`${lftSdXp}, ${operator}, ${rghtSdXp}`);

   }
  

}}

*/

/*
 
symBtns.addEventListener("click",function(event){
 
if(event.target === "=" ){
   console.log('equals!');
  console.log(`you press ${event.button}`)
  let expression = clcArr.join('');
  display.innerText = expression;
  console.log(expression);
}
});



*/
/*

function xpHndlr(joinedParam){
j++;
xpArr[j]= Arr[j];
while(xpArr.length > 0 && xpArr[j] ==='=' ){
   j=0; j++;
   let lftSdXp=xpArr[j];
   while(xpArr[j] === '+'|'-'|'/'|'*' && xpArr [j] <= xpArr.length ){

     let operator = xpArr[j];
     j = j+1;
     j++;
     let rghtSdXp = xpArr[j]
      console.log(`${lftSdXp}, ${operator}, ${rghtSdXp}`);

   }
  

}}


*/
