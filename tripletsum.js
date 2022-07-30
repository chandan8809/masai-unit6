let arr=[1,10,5]
let k=17;
let n=arr.length;
arr=arr.sort((a,b)=>(a-b))
function triplet(arr,k,n){
   if(n<3){
       return "arr size less"
   }
   else{
    for(let i=0;i<n-2;i++){
        let left=i+1;
        let right=n-1;
        while(left<right){
            if(arr[left]+arr[right]+arr[i]===k){
                return [arr[left],arr[right],arr[i]];
            }
            else if(arr[left]+arr[right]+arr[i]>k){
                right--
            }
            else if(arr[left]+arr[right]+arr[i]<k){
                left++
            }
        }
    }
    return false
   }
}

console.log(triplet(arr,k,n))