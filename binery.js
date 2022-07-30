let arr=[2,15,17,23,100]
arr=arr.sort((a,b)=>(a-b))
let target=100

function bnery(arr,target){
    let start=0;
    let end=arr.length-1;
    while(start<=end){
        let mid=Math.floor((start+end)/2)
        if(target===arr[mid]){
            return mid
        }
        else if(target>arr[mid]){
            start=mid+1
        }
        else{
            end=mid-1
        }
    }
    return -1

}

console.log(bnery(arr,target))