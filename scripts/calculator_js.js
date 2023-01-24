let displayEl = document.getElementsByClassName("ClcDisplay");

let numberfiedString = new Number();
let mathematicalSymbol = new String();

let displayList = new Array();
let numberList = new Array();
let expressionList = new Array();

let buttons = document.querySelectorAll("button");
console.log(buttons);
let CalculatorEffects = buttons.forEach((button) =>
  button.addEventListener("click", () => {
    let buttonPressed = button.textContent;
    console.log(`You clicked: ${buttonPressed}`);
    displayList.push(buttonPressed);
    document.body.firstElementChild.innerText = displayList.join("");
    //-----------------do not code above here----------------------------------------------------//

    if (!isNaN(buttonPressed)) {
      setNumberList(buttonPressed);
      // setNumberList();
    } else if (isNaN(buttonPressed) && buttonPressed != "=") {
      setSymbol(buttonPressed);
      setExpressionList(numberfiedString, mathematicalSymbol); //too early to be called
    } else {
      displayListEraser(); //dsArr is empty now, but the display has not been erased
      setNumberList(numberList.pop());
      expressionList.push(parseInt(numberList[0]));
      calculatorControlFunction(expressionList);
    }
  })
);

//-----------------basic functionality---------------------//

function setNumberList(param) {
  numberList.push(param);
  numberfiedString = parseInt(numberList.join("")); //a joined integer
  numberList[0] = numberfiedString;
  // numberList.push(param);//setNumberList would have a param if this block was active
  // numberfiedString = parseInt(numberList.join("")); //a joined integer
}

function setSymbol(paramSym) {
  mathematicalSymbol = paramSym; //the Symbol is captured,
}

function setExpressionList(paramNum, paramSym) {
  expressionList.push(paramNum);
  expressionList.push(paramSym);
  numberListEraser(); //this erases the list before its ready to be i think
  console.log(
    `This is in ${expressionList} after OpFunc, this is in ${numberList} after OpFunc `
  );
  return expressionList;
}

function calculatorControlFunction(arrPar) {
  if (arrPar.length != 0) {
    let firstNumber = arrPar.shift();
    let localSymbol = arrPar.shift();
    let rlS = numberList[0];
    if (localSymbol === "+") {
      let secondNumber = rlS;
      arrPar[0] = SetAdd(firstNumber, secondNumber);
      // return SetAdd(firstNumber, secondNumber);
    } else if (localSymbol === "-") {
      let secondNumber = rlS;
      arrPar[0] = SetSub(firstNumber, secondNumber);
      // return SetAdd(firstNumber, secondNumber);
    } else if (localSymbol === "*") {
      let secondNumber = rlS;
      arrPar[0] = SetMult(firstNumber, secondNumber);
      // return SetAdd(firstNumber, secondNumber);
    } else if (localSymbol === "/") {
      let secondNumber = rlS;
      arrPar[0] = SetDiv(firstNumber, secondNumber);
      // return SetAdd(firstNumber, secondNumber);
    }
  }
}

//this erases the entire element,upon the next button click
//filling it with new value
function displayListEraser() {
  displayList = [];
  //   document.body.firstElementChild.innerText = "";
  console.log(
    `Testing, Is display list empty? ${(displayList.length === 0) === true}`
  );
}

function numberListEraser() {
  numberList = [];
  //   document.body.firstElementChild.innerText = "";
  console.log(
    `Testing, Is display list empty? ${(numberList.length === 0) === true}`
  );
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
  console.log(c);
  return c;
}
function SetMult(a, b) {
  let c = 0;
  c = a * b;
  console.log(c);
  return c;
}

function SetDiv(a, b) {
  let c = 0;
  c = a / b;
  console.log(c);
  return c;
}
