var initialPrice = document.querySelector("#initial-price")
var currentPrice = document.querySelector("#current-price")
var stocksQuantity = document.querySelector("#stocks-quantity")
var btn = document.querySelector("#btn")
var output = document.querySelector("#output")

// To take input values
function submitHandler(){
    var ip = initialPrice.value
    var curr = currentPrice.value
    var qnty = stocksQuantity.value

    calculate(ip, qnty, curr )
}


// to calculate profit or loss
function calculate(Initial,Quantity,Current){
    if(Current > Initial){
        var profit = (Current - Initial) * Quantity
        var profitPer = (profit / Initial) * 100
    outputMessage(`Profit is Rs.${profit} and Profit Percentage is ${profitPer}%`);
    }
    else if(Initial > Current){
    var loss = (Initial - Current) * Quantity
        var lossPer = (loss / Initial) * 100
    outputMessage(`Loss is Rs.${loss} and Loss Percentage is ${lossPer}%`);
    }
    else{
        outputMessage("Neither Profit nor Loss")
    }
}

function outputMessage(msg){
    output.innerHTML = msg
}

btn.addEventListener("click",submitHandler)