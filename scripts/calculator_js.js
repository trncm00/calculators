let buttons = document.getElementsByClassName("numberList");
console.log(buttons)



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
/*let btnArr = Array();
for(let button in buttons){
btnArr.push(button)
};
*/
