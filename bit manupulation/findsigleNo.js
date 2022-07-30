arr=[9,2,2,3,3,4,4,5,5,6,6,7,7]
function findSingle(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum^arr[i]
    }
    console.log(sum)
}
findSingle(arr)