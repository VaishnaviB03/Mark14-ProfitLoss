var initialPrice = document.querySelector("#initial-price")
var currentPrice = document.querySelector("#current-price")
var stocksQuantity = document.querySelector("#stocks-quantity")
var btn = document.querySelector("#btn")
var output = document.querySelector("#output")

// To take input values
function submitHandler(){
    var ip = Number(initialPrice.value)
    var curr = Number(currentPrice.value)
    var qnty = Number(stocksQuantity.value)

    calculate(ip, qnty, curr )
}


// to calculate profit or loss
function calculate(Initial,Quantity,Current){
    if(Current > Initial){
        var profit = (Initial - Current) * Quantity
        var profitPer = (profit / initial) * 100
        outputMessage(`Profit is Rs.${profit} and Profit Percentage is ${profitPer}%`);
    }
    else if(Initial > Current){
        var loss = (Current - Initial) * Quantity
        var lossPer = (loss / initial) * 100
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