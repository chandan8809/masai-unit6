let arr=[1,10,-1,-4,-7,5,-8,10,4]   //find max of consecutive numbers
let n=arr.length;
let max=-9999999999;
let sum=0
for(let i=0;i<n;i++){
    sum+=arr[i]
    if(sum>max){
        max=sum;
    }
    if(sum<0){
        sum=0
    }
    console.log(sum)

}
console.log(max)


