const fibb=(n,memo={})=>{
    if(n<=2) return 1;

    if(n in memo) return memo[n]
    
    memo[n]=fibb(n-1,memo)+fibb(n-2,memo)
    return memo[n]
    
}

console.log(fibb(100))