function upperBound(arr,k){
    let start=0;
    let end=arr.length-1;
    let res;
    while(start<=end){
        let mid=Math.floor((start+end)/2)
        if(k>=arr[mid]){
            start=mid+1
        }
        else{
            end=mid-1
            res=mid
        }
    }
    console.log(res)

}
let arr=[0,2,4,4,5,5,7,9,10]
let k=9
upperBound(arr,k)