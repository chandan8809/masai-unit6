const bestSum=(targetSum,numbers,memo={})=>{
    if(targetSum in memo) return memo[targetSum]
    if(targetSum===0) return [];
    if(targetSum<0) return null;

    let shortestArr=null

    for(let num of numbers){
        const remainder=targetSum-num;
        const remainderCombination=bestSum(remainder,numbers,memo)
        if(remainderCombination!=null){
            arr=[...remainderCombination,num]
            if(shortestArr==null||arr.length<shortestArr.length){
                
                shortestArr=arr;

            }
        }
    }
    
    memo[targetSum]=shortestArr
    return memo[targetSum];
}

console.log(bestSum(100,[1,2,3,25]))