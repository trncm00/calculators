// 

//maybe i can use this for an array later, this 
//not working with addElementById
// let buttons=document.getElementsByTagName("button");

let btnArr = Array();
for(let button in buttons){
btnArr.push(button)
};

console.log(typeof(buttons))
console.log(btnArr)

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