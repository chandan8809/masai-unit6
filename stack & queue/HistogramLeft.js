let arr=[6,2,5,4,5,1,6]

let left=[]     //nse index on left
let stack=[];

for(let i=0;i<arr.length;i++){
    while(stack.length>0 && arr[stack[stack.length-1]]>=arr[i]){         //finding smallest nebour to the left
        stack.pop()
    }
    left[i]=stack.length==0?-1:stack[stack.length-1]
    
    stack.push(i)
}
console.log(left)
