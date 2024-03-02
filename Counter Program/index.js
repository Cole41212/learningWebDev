// COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}


//console.log("Hello World");
//console.log("I like pizza");

//window.alert('This is an alert')

//this is a comment

//document.getElementById("myH1").textContent = "Hello";
//document.getElementById("myP").textContent = "i like pizza";


/* 
    this 
    is 
    a 
    comment

let x;
x = 100;
let firstName = "Bro";

console.log(typeof firstName);
console.log(typeof x);

console.log(`Your name is ${firstName}`); 
console.log("You are "+x+" years old");
console.log(`You are ${x} years old`);
*/

//User input

/*let username = window.prompt(`What's your username?`);
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}
*/

//type conversion

//let age = window.prompt("how old are you");
//age = Number(age); //converts to number type.

// age +=1;
// console.log(age);1