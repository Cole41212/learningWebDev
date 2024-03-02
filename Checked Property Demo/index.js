//Random num generator

// let randomNum = Math.random(); random num between 0-1 with decimals

//const min = 5;
//const max = 10;

//let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

//console.log(randomNum);

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");

const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed!`;
    }
    else{
        subResult.textContent = `The user is not subscribed :(`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa.`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `You are paying with MasterCard.`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `You are paying with PayPal.`;
    }
    else{
        paymentResult.textContent = `No payment method selected.`;
    }
}