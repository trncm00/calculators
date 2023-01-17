// I would rather not have to add classes to html,
//i would rather just use js to grab the buttons tags
//and act on them, it is just too tricky.

//maybe i can use this for an array later, this 
//not working with addElementById
const buttons=document.getElementsByTagName("button");
const eventTst=(buttonPar)=>{
  console.log(`The mouse click event on the ${buttonPar}`)
}
// const buttonEvent = buttons[0].addEventListener('click',eventTst)
console.log(`this is document.getElementsByTagName("button") ${buttons} `)
let btnArr = Array();
for(let i = 0; i>=buttons.length;i++){
// btnArr.push(buttons[i])b
let button = buttons[i];
button.addEventListener('click',eventTst)
console.log(`This, the value (${button}) is a ${typeof button }.`)

};

// console.log(typeof(buttons))
// console.log(`this is an array of buttons, ${btnArr}`)
/*

//This statement returns an array
//it also returns the array length, after the nth element
//is logged ?????
let buttons=document.getElementsByTagName("button");
for(let button in buttons){
    console.log(buttons[button])
};

//This block makes an array and uses for in to push elements into array
//use this to make event listeners 
let btnArr = Array();
for(let button in buttons){
btnArr.push(button)
};

*/