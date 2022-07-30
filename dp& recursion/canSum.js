// const canSum=(target,numbers)=>{
//     if(target===0) return true;
//     if(target<0) return false;

//     for(let num of numbers){
    
        
//         if(canSum(target-num,numbers)===true){
//             return true;
//         } 
//     }
//     return false

// }
// console.log(canSum(1000,[2,3,4,5]))

// const canSum=(targetSum,numbers,memo={})=>{
//     if(targetSum in memo) return memo[targetSum]
//     if(targetSum===0) return true;
//     if(targetSum<0) return false;

//     for(let num of numbers){
//         const remainder=targetSum-num;
//         if(canSum(remainder,numbers,memo)===true){
//             memo[remainder]=true
//             return true;
//         }
//     }
//     return false;
// }

// console.log(canSum(300,[7,14]));

//without memo

const canSum=(targetSum,numbers)=>{
    if(targetSum===0) return true;
    if(targetSum<0) return false;

    for(let num of numbers){
        if(canSum(targetSum-num,numbers)===true){
            return true;
        }
    }
    return false;
}

console.log(canSum(14,[7,14]));
