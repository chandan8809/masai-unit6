let target=4;

console.log(sqrt(target))

function sqrt(target){
    let start=0;
    let end=target;
    let res=-1;
    while(start<=end){
        let mid=Math.floor((start+end)/2)
        if(target==mid*mid){
            return mid
        }
        else if(target<mid*mid){
            end=mid-1;
            
           
        }
        else if(target>mid*mid){   //we need floor value of sqrt,so we need to store less value                     //
            start=mid+1             // here target is large it means mid is small so we need to
            res=mid;                //store the value (as we need small value)
           
        }
    }
    return res;
}