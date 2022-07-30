let arr=[6,2,5,4,5,1,6]

let left=[]     //nse index on left
let stack=[];
stack.push(arr[0])
left[0]=-1;
for(let i=1;i<arr.length;i++){
    while(stack.length>0 && stack[stack.length-1]>=arr[i]){         //finding smallest nebour to the left
        stack.pop()
    }
    left[i]=stack.length==0?-1:stack[stack.length-1]
    
    stack.push(arr[i])
}
console.log(left)
