window.addEventListener("DOMContentLoaded", main)

function main(){
    addEventListeners()
    
}

// on click btn calculate denominations
function addEventListeners() {
    const btn = document.querySelector("#btn")
    btn.addEventListener("click", calculateDenominations)
}


// function that returns the diffrence between two numbers in 3 diffrent denominations // 
function calculateDenominations() {
    // get input values
    let cost = document.getElementById("cost").value;
    let pay = document.getElementById("pay").value;
    // calculate the result
    let result = pay - cost;
    // calculate the denominations
    let hundreds = Math.floor(result / 100);
    let twenties = Math.floor((result % 100) / 20);
    let fives = Math.floor((result % 100) % 20 / 5);
    let ones = Math.floor((result % 100) % 20 % 5);
    // show the result
    document.getElementById("result").innerHTML = "Your change is " + hundreds + " hundreds, " + twenties + " twenties, " + fives + " fives, and " + ones + " ones.  " + " \nThe total is " + result + " crowns. \n" +  "Keep the change you filthy animal!";
}

