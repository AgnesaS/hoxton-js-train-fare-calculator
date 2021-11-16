let userAge = Number(prompt("What's your age?"));
let userKmPassed =  Number(prompt("How many km have you passed?"));



const pricePerKm = 0.21;
let ticketPrice = pricePerKm * userKmPassed;



if(userAge<18){
    alert("You've got a 20% discount")
    ticketPrice = ticketPrice - (0.2 * ticketPrice)
}


else if (userAge>65){
alert("You've got a 40% discount ")
ticketPrice = ticketPrice - ( 0.4 * ticketPrice)
}

alert(`Your ticket is ${ticketPrice.toFixed(2)}`)

