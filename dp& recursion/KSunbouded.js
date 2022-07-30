let arr=[1,3,5]

let target = 3;

//find no of ways to get 10 you can use no in arraay any no of times
let count=0;
function getSum(arr,target,sum=0){
    if (sum==target){
        count++
        return ;
    }
    if (sum>target) return;

    for (let num of arr){
         getSum(arr,target,sum+num)
    }
}

getSum(arr,target)

console.log(count)