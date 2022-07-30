const howSum=(targetSum,numbers,memo={})=>{
    if(targetSum in memo) return memo[targetSum]
    if(targetSum===0) return [];
    if(targetSum<0) return null;

    for(let num of numbers){
       const remainder=targetSum-num;
       const arr=howSum(remainder,numbers,memo)
       if(arr!=null){
           memo[targetSum]=[...arr,num]
           return memo[targetSum]

       }
    }


    memo[targetSum]=null
    return null

}

console.log(howSum(61,[2,3,4,5]))