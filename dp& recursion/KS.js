let val = [60, 100, 120];
let wt = [10, 20, 30];
let W = 50;
let n = val.length;


function recursive(val,wt,W,n){
    if(W==0||n==0) return 0;

    if(wt[n-1]>W){
        return recursive(val,wt,W,n-1)
    }

    return Math.max(val[n-1]+recursive(val,wt,W-wt[n-1],n-1),recursive(val,wt,W,n-1))

}

console.log(recursive(val,wt,W,n))
