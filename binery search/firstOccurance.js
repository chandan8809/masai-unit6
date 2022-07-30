let arr=[1,2,3,4,4,4,4,4,5,6,6,6,7,8]
let target=1;

//first occurance is same as lowerbound exept if elment is not presnt in first occurent
//it returns -1

console.log(first(arr))
function first(arr){
    let start=0;
    let end=arr.length-1;
    let res=-1;
    while(start<=end){
        let mid=Math.floor((start+end)/2)
        if(target==arr[mid]){
            res=mid;
            end=mid-1;
        }
        else if(target>arr[mid]){
            start=mid+1
        }
        else{
            end=mid-1
        }
    }
    return res    
}