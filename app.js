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
    if(Number(Current) > Number(Initial)){
        var profit = (Number(Initial) - Number(Current)) * Quantity
        var profitPer = (profit / Number(Initial)) * 100
        outputMessage(`Profit is Rs.${Math.abs(profit)} and Profit Percentage is ${Math.abs(profitPer)}%`);
    }
    else if(Number(Initial) > Number(Current)){
        var loss = (Number(Current) - Number(Initial)) * Quantity
        var lossPer = (loss / Number(Initial)) * 100
        outputMessage(`Loss is Rs.${Math.abs(loss)} and Loss Percentage is ${Math.abs(lossPer)}%`);
    }
    else{
        outputMessage("Neither Profit nor Loss")
    }
}

function outputMessage(msg){
    output.innerHTML = msg
}

btn.addEventListener("click",submitHandler)