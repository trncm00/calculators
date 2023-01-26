// let displayEl = document.getElementsByClassName("ClcDisplay");
let joinedString = new String();
let numberfiedString = new Number();
let mathematicalSymbol = new String();
let expressionValue = new Number();

let displayList = new Array();
let numberList = new Array();
let expressionList = new Array();

let buttons = document.querySelectorAll("button");
console.log(buttons);
let CalculatorEffects = buttons.forEach((button) =>
  button.addEventListener("click", () => {
    let buttonPressed = button.textContent;
    console.log(`You clicked: ${buttonPressed}`);
    setDisplayList(buttonPressed);
    document.body.firstElementChild.innerText = joinString(displayList);
    //--------------------------------do-not-code-above-here-----------------------------//

    if (!isNaN(buttonPressed)) {
      setNumberList(buttonPressed); //isolated in num list, joined,
    } else if (isNaN(buttonPressed) && buttonPressed != "=") {
      setSymbol(buttonPressed);
      // prepExpression(numberfiedString, mathematicalSymbol);
      // setExpressionList(numberfiedString, mathematicalSymbol); //too early to be called
    } else {
      displayListEraser(); //dsArr is empty now, but the display has not been erased
      // setNumberList(numberList.pop());
      // setExpressionList(parseString(numberList[0])); //this is a hack
      //to set the second numerical value, i need a better way

      calculatorControlFunction(expressionList);
    }
  })
);

//-------------------------------basic--functionality---------------------------------//
function setDisplayList(parrPressed) {
  displayList.push(parrPressed);
}

function setExpressionList(paramAny) {
  expressionList.push(paramAny); //send param to expression array
  return expressionList;
}

function setSymbol(paramSym) {
  mathematicalSymbol = paramSym; //the Symbol is captured,
  setExpressionList(mathematicalSymbol);
}

function joinString(stringPar) {
  return stringPar.join(""); //a joined integer
}
function parseString(stringPar) {
  numberfiedString = parseInt(stringPar);
}

//complex functions

function saveRestOfexpressionList(arrParr) {
  let localArr = arrParr.slice(0, arrParr.length);
  console.log(localArr);
  return localArr;
}

function setNumberList(param) {
  numberList.push(param); //send to numberList
  joinedString = joinString(numberList); //join
  parseString(joinedString); //numberfy
  setExpressionList(numberfiedString);
  numberList = [];
}

function calculatorControlFunction(arrPar) {
  while (arrPar.length > 1) {
    let firstNumber = arrPar.shift();
    let localSymbol = arrPar.shift();
    let secondNumber = arrPar.shift();
    let localArr = saveRestOfexpressionList(arrPar);
    // arrPar = [];
    if (localSymbol === "+") {
      expressionValue = SetAdd(firstNumber, secondNumber);
      arrPar.unshift(expressionValue);
      // return SetAdd(firstNumber, secondNumber);
    } else if (localSymbol === "-") {
      expressionValue = SetSub(firstNumber, secondNumber);
      arrPar.unshift(expressionValue);
      // return SetAdd(firstNumber, secondNumber);
    } else if (localSymbol === "*") {
      expressionValue = SetMult(firstNumber, secondNumber);
      arrPar.unshift(expressionValue);
      // return SetAdd(firstNumber, secondNumber);
    } else if (localSymbol === "/") {
      expressionValue = SetDiv(firstNumber, secondNumber);
      arrPar.unshift(expressionValue);
      // return SetAdd(firstNumber, secondNumber);
    }

    // localArr.unshift(arrPar);
    // arrPar.unshift(localArr);
    // if(arrPar.length === 1){

    // }
  }
  return expressionValue;
}

//erasers
function displayListEraser() {
  displayList = [];
  document.body.firstElementChild.innerText = displayList;
  //   document.body.firstElementChild.innerText = "";
  console.log(
    `Testing, Is display list empty? ${(displayList.length === 0) === true}`
  );
}

function numberListEraser() {
  numberList = [];
  //   document.body.firstElementChild.innerText = "";
  console.log(
    `Testing, Is the number list empty? ${(numberList.length === 0) === true}`
  );
}

function expressionListEraser() {
  expressionList = [];
  console.log(
    `Testing, Is the expression list empty? ${
      (expressionList.length === 0) === true
    }`
  );
}

//ez operation functions
function SetAdd(a, b) {
  let c = 0;
  c = a + b;
  expressionValue = c;
  document.body.firstElementChild.innerText = c;
  console.log(c);

  return c;
}
function SetSub(a, b) {
  let c = 0;
  c = a - b;
  expressionValue = c;
  document.body.firstElementChild.innerText = c;
  console.log(c);
  return c;
}
function SetMult(a, b) {
  let c = 0;
  c = a * b;
  expressionValue = c;
  document.body.firstElementChild.innerText = c;
  console.log(c);
  return c;
}

function SetDiv(a, b) {
  let c = 0;
  c = a / b;
  expressionValue = c;
  document.body.firstElementChild.innerText = c;
  console.log(c);
  return c;
}
