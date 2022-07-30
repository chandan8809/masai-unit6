let arr=[1,0,2,0,1,0,3,1,0,2]

let res=0
for(let i=1;i<arr.length-1;i++){   //leaving leftmost and right most
    let left=arr[i]
    for(let j=0;j<i;j++){
        left=Math.max(left,arr[j])
    }
    
    let right=arr[i]
    for(let j=i+1;j<arr.length;j++){
        right=Math.max(right,arr[j])
    }
    
    res+=Math.min(left,right)-arr[i]
    
}
console.log(res)