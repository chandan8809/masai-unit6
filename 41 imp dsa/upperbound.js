let arr=[0,2,4,4,4,5,7,7,9,10]
let k=7

function upper(arr,k){
    let start=0;
    let end=arr.length-1;
    let res=-1
    while(start<=end){
        let mid=Math.floor((start+end)/2)
        if(arr[mid]==k){
            res= mid;
            start=mid+1
        }
        else if(arr[mid]<k){
            start=mid+1
        }
        else if(arr[mid]>k){
           res=mid;
            end=mid-1
        }

    }
    return res;
}

console.log(upper(arr,k))