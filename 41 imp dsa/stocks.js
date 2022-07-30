prices = [7,1,5,3,6,40]  //find max Profit

function stacks(prices){
    let min=prices[0];
    let profit=0;
    let maxprofit=0;
    for(let i=1;i<prices.length;i++){
        profit=prices[i]-min;
        if(maxprofit<profit){
            maxprofit=profit
        }
        if(min>prices[i]){
            min=prices[i]
        }
    }
    console.log(maxprofit)
}

stacks(prices)