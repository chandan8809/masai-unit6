//Given an integer x, find it’s square root. If x is not a perfect square, then return floor(√x).

let x=50

function binery(x){
    let start=0;
    let end=x;
    let res=-1
    while(start<=end){
        let mid=Math.floor((start+end)/2)
        if(mid*mid==x){
            return mid;
        }
        else if(mid*mid<x){
            res=mid;
            start=mid+1
        }
        else {
           
            end=mid-1
        }

    }
    return res;
}

console.log(binery(x))