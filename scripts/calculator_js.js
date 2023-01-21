let displayEl = document.getElementsByClassName("ClcDisplay");

// let buttons = document.getElementsByClassName("ClcGrid");
// console.log(buttons[0].firstChild)

let buttons = document.querySelectorAll("button");
// addEventListener(buttons,()=>{
//     console.log('hey addEventListener')
// })
console.log(buttons);

let number = new Number();
let clcOperator = new String();

let opArr = new Array();
let nmArr = new Array();
let dsArr = new Array(); //when this moved into the button event listener
//it loses the join effect, can that be circumvented? Maybe this is cleaner?
let ClcDisplay = buttons.forEach((button) =>
  button.addEventListener("click", () => {
    console.log(`You clicked: ${button.textContent}`);
    dsArr.push(button.textContent);
    document.body.firstElementChild.innerText = dsArr.join("");
    //everything above here is perfect
    //-----------------do not code above here----------------------------------------------------//

    //this logic non-numbers from the array
    //and then joins
    if (!isNaN(button.textContent)) {
      nmArr.push(button.textContent);
      //   parseInt(nmArr.join(""));
    } else if (button.textContent === "=") {
    } else {
      //in the case where the number is a symbol
      clcOperator = button.textContent; //the Symbol is captured,
      //make a function which takes the opSymbol
      //and chooses a math function to do depending on the symbol

      number = parseInt(nmArr.join("")); //a joined integer
      dsEraser(); //dsArr is empty now, but the display has not been erased
      operationsArrFunc(number, clcOperator); //nmArr, dsArr are empty now, opArr has a new joined number
    }

    // if(){}
    // if (
    //   (button.textContent != "+") |
    //   (button.textContent != "-") |
    //   (button.textContent != "*") |
    //   (button.textContent != "/ ") |
    //   (button.textContent != "&lt")
    // ) {
    //   nmArr.push(button.textContent);
    // }
  })
);

// typeof isNaN(Number(dsplArr[0]));

//logic for detecting the equals ,
//isNaN()
// if (button.innerText != "=") {
//   dsplArr.push(button.textContent);
// }
// if (button.innerText === "=") {
//   dsplArr.forEach();
//   console.log("equals event detected!");
// }

//basic functionality

function operationsArrFunc(paramNum, paramSym) {
  opArr.push(paramNum);
  opArr.push(paramSym);
  nmEraser();
  console.log(
    `This is in ${opArr} after OpFunc, this is in ${nmArr} after OpFunc `
  );
}

function operationsCalcFunc() {
  while (opArr.length() != 0) {
    let i = opArr.shift();
    if (opArr[0] === "+") {
      let j = opArr[1];
      let ass = SetAdd(i, j);
      console.log(ass);
    }
  }
}

//this erases the entire element,upon the next button click
//filling it with new value
function dsEraser() {
  dsArr = [];
  //   document.body.firstElementChild.innerText = "";
  console.log(dsArr);
}

function nmEraser() {
  nmArr = [];
  //   document.body.firstElementChild.innerText = "";
  console.log(nmArr);
}

//ez operation functions
function SetAdd(a, b) {
  let c = 0;
  c = a + b;
  console.log(c);
  return c;
}
function SetSub(a, b) {
  let c = 0;
  c = a - b;
  return c;
}
function SetMult(a, b) {
  let c = 0;
  c = a * b;
  return c;
}

function SetDiv(a, b) {
  let c = 0;
  c = a / b;
  return c;
}
// const thing =
//   inputVal != "add"
//     ? nmArr.push(inputVal)
//     : inputVal != "subtract"
//     ? nmArr.push(inputVal)
//     : inputVal != "multiply"
//     ? nmArr.push(inputVal)
//     : inputVal != "divide"
//     ? nmArr.push(inputVal)
//     : inputVal != "back"
//     ? nmArr.push(inputVal)
//     : inputVal != "equals "
//     ? nmArr.push(inputVal)
//     : "error";

//   dsplArr.map((inputVal) => {
//       if (inputVal != "add" ? nmArr.push(inputVal) : nmArr.push("no value"));
//     });

// );

// let nmArr = new Array();
// dsplArr.forEach((inputVal) => {
//   console.log(inputVal);
// });

/*
let dsplArr = new Array();
let button = buttons.forEach((button) =>
  button.addEventListener("click", () => {
    console.log(`You clicked: ${button.textContent}`);
    document.body.firstElementChild.innerText = button.textContent;
    dsplArr.push(button.innerText);
    dsplArr.forEach((inputVal) => {
      console.log(inputVal);
    });
  })
);
*/
//   if (
//     (inputVal != "add") | "subtract" | "multiply" | "divide"
//       ? nmArr.push(inputVal)
//       : console.log(inputVal)
//   );

// addEventListener("click", (button) => {
//   console.log(`The ${button.view} button was clicked.`);
// });

// for(let button in buttons){
//     console.log(buttons[button].firstChild)
//     clcButton =buttons[button].className
//     addEventListener("click",(clcButton) => {console.log(`The ${button} button was clicked`)})
//     }

// console.log(buttons[0].firstChild.data)

// I would rather not have to add classes to html,
//i would rather just use js to grab the buttons tags
//and act on them, it is just too tricky.

//maybe i can use this for an array later, this
//not working with addElementById

// this expression puts an array like into a value
//i can't use it with addEventListeners so fuck it
//const buttons=document.getElementsByClassName("btnEvent");

//This statement returns an array
//it also returns the array length, after the nth element
//is logged ?????
/*
let buttons=document.getElementsByTagName("button");
for(let button in buttons){
    console.log(buttons[button])
};
*/

//This block makes an array and uses for in to push elements into array
//use this to make event listeners
/*let dsplArr = Array();
for(let button in buttons){
dsplArr.push(button)
};
*/
