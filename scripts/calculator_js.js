let displayEl = document.getElementsByClassName("ClcDisplay");

// let buttons = document.getElementsByClassName("ClcGrid");
// console.log(buttons[0].firstChild)

let number = new Number();
let clcOperator = new String();

let operatingList = new Array();
let numberList = new Array();
let displayList = new Array();
//when this moved into the button event listener
//it loses the join effect, can that be circumvented? Maybe this is cleaner?

let buttons = document.querySelectorAll("button");
console.log(buttons);
let CalculatorEffects = buttons.forEach((button) =>
  button.addEventListener("click", () => {
    console.log(`You clicked: ${button.textContent}`);
    displayList.push(button.textContent);
    document.body.firstElementChild.innerText = displayList.join("");
    //everything above here is perfect
    //-----------------do not code above here----------------------------------------------------//

    if (!isNaN(button.textContent)) {
      // setNumberList(button.textContent);
      numberList.push(button.textContent);
      //   parseInt(nmArr.join(""));
    } else if (button.textContent === "=") {
      calculatorControlFunction(operatingList);
    } else {
      //in the case where the number is a symbol
      clcOperator = button.textContent; //the Symbol is captured,
      //make a function which takes the opSymbol
      //and chooses a math function to do depending on the symbol

      number = parseInt(numberList.join("")); //a joined integer
      dsEraser(); //dsArr is empty now, but the display has not been erased
      setOperationsList(number, clcOperator); //nmArr, dsArr are empty now, opArr has a new joined number
    }
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

function setOperationsList(paramNum, paramSym) {
  operatingList.push(paramNum);
  operatingList.push(paramSym);
  nmEraser();
  console.log(
    `This is in ${operatingList} after OpFunc, this is in ${numberList} after OpFunc `
  );
  return operatingList;
}

function calculatorControlFunction(arrPar) {
  if (arrPar.length != 0) {
    let firstNumber = arrPar.shift();
    let localSymbol = arrPar.shift();
    if (localSymbol === "+") {
      let secondNumber = arrPar[0];
      arrPar[0] = SetAdd(firstNumber, secondNumber);
    }
  }
}

function setNumberList() {}

// function operationsCalcFunc(arrPar) {
//   if (arrPar.length != 0) {
//     let firstNumber = arrPar.shift;
//     let localSymbol = arrPar.shift;
//     if (localSymbol === "+") {
//       let secondNumber = arrPar[0];
//       arrPar[0] = SetAdd(firstNumber, secondNumber);
//     }
//   }
// }

// function operationsCalcFunc(arrPar) {
//   if (arrPar.length != 0) {
//     let firstNumber = arrPar.shift;
//     let localSymbol = arrPar.shift;
//     if (localSymbol === "+") {
//       let secondNumber = arrPar[0];
//       arrPar[0] = SetAdd(firstNumber, secondNumber);
//     }
//   }
// }

// function operationsCalcFunc() {
//   while (opArr.length != 0) {
//     let i = opArr.shift;
//     if (opArr[0] === "+") {
//       let j = opArr[1];
//       opArr[0] = SetAdd(i, j);
//       console.log(ass);
//     }
//   }
// }

//this erases the entire element,upon the next button click
//filling it with new value
function dsEraser() {
  displayList = [];
  //   document.body.firstElementChild.innerText = "";
  console.log(displayList);
}

function nmEraser() {
  numberList = [];
  //   document.body.firstElementChild.innerText = "";
  console.log(numberList);
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
