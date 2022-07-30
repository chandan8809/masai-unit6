let arr=[1,2,5,6,6,6,7,8]    ///////lowerbound
let target=6;

console.log(lower(arr))
function lower(arr){
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
            res=mid;
        }
    }
    return res    
}