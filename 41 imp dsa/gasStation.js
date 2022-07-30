let gas = [1,2,3,4,5]
let cost = [3,4,5,1,2]

function gasStation(gas,cost){
    let start=0;
    let total=0;
    let fuel=0
    for(let i=0;i<gas.length;i++){
        fuel+=gas[i]-cost[i];
        total+=gas[i]-cost[i];
        if(fuel<0){
            fuel=0;
            start=i+1
        }
    }
    
    if(total>=0){
        console.log(start)
    }
    else{
        console.log(-1)
    }
}

gasStation(gas,cost)