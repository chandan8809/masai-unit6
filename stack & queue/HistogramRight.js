let arr=[6,2,5,4,5,1,6]

let right=[]     //nse index on left
let stack=[];
// stack.push(arr.length-1)
// right[arr.length-1]=arr.length
for(let i=arr.length-1;i>=0;i--){
    while(stack.length>0 && arr[stack[stack.length-1]]>=arr[i]){         //finding smallest nebour to the left
        stack.pop()
    }
    right[i]=stack.length==0?arr.length:stack[stack.length-1]
    
    stack.push(i)
}
console.log(right)
