let arr=[1,2,2,2,3,3,3,3,3,4,4,5,6]
let target=4;

console.log(upper(arr,target))

function upper(arr,target){
    let start=0;
    let end=arr.length-1;
    let res=-1;
    while(start<=end){
        let mid=Math.floor((start+end)/2)
        if(target===arr[mid]){
            start=mid+1;
        }
        else if(target<arr[mid]){
            end=mid-1;
            res=mid;
        }
        else if(target>arr[mid]){
            start=mid+1
        }

    }
    return res;
}

