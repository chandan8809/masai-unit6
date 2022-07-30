let arr=[1,2,3,4,5]
let k=77;
sum=0;
i=0;
console.log(solve(arr,k,sum,i))

function solve(arr,k,sum,i){
    if(sum==k){
        return true;
    }
    if(i==arr.length){
        return false
    }
    if(sum>k){
        return false
    }
    return solve(arr,k,sum+arr[i],i+1) || solve(arr,k,sum,i+1)
}