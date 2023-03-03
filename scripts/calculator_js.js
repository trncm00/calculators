let joinedString = new String();
let numberfiedString = new Number();
let reference_number = new Number();
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
    buttonPressed != "<" ? setDisplayList(buttonPressed) : backspaceFunction();
    // setDisplayList(buttonPressed);
    document.body.firstElementChild.innerText = joinString(displayList);
    //--------------------------------do-not-code-above-here-----------------------------//
    if (!isNaN(buttonPressed)) {
      setNumberList(buttonPressed);
      console.log(`You pressed the ${buttonPressed} key`);
    }
    //  else if (buttonPressed === "<") {
    //   console.log(`You pressed the ${buttonPressed} key`);
    //   backspaceDisplay();
    //   backspaceNumList();
    // }
    else if (isNaN(buttonPressed) || buttonPressed != "=") {
      setExpressionList(numberfiedString);
      numberList = [];
      if (isNaN(buttonPressed) && buttonPressed != "=") {
        setSymbol(buttonPressed);
      } else {
        displayListEraser();
        calculatorControlFunction(expressionList);
      }
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
  return parseInt(stringPar);
}

//-------------------------------backspace--functionality---------------------------------//

function backspaceFunction() {
  console.log(`You pressed the < key`);
}

function backspaceDisplay() {
  displayList.pop();
  document.body.firstElementChild.innerText = joinString(displayList);
}

function backspaceNumList() {
  numberList.pop();
  joinedString = joinString(numberList);
  numberfiedString = parseString(joinedString);
}

//complex functions

function saveRestOfexpressionList(arrParr) {
  localArr = arrParr.slice(0, arrParr.length);
}

function setNumberList(param) {
  numberList.push(param); //send to numberList
  joinedString = joinString(numberList); //join numberlist
  numberfiedString = parseString(joinedString); //numberfied string
  reference_number = numberfiedString;
}

function calculatorControlFunction(arrPar) {
  while (arrPar.length > 1) {
    let firstNumber = arrPar.shift();
    let localSymbol = arrPar.shift();
    let secondNumber = arrPar.shift();
    saveRestOfexpressionList(arrPar);

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
    } else if (localSymbol === "<") {
      expressionValue = SetDiv(firstNumber, secondNumber);
      arrPar.unshift(expressionValue);
      // return SetAdd(firstNumber, secondNumber);
    }
  }
  return expressionValue;
}

//erasers
function displayListEraser() {
  displayList = [];
  document.body.firstElementChild.innerText = displayList;
}

function numberListEraser() {
  numberList = [];
}

function expressionListEraser() {
  expressionList = [];
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
