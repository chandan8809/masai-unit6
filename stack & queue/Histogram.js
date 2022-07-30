let arr=[6,2,5,4,5,1,6]

let left=[]     //nse index on left
let stack=[];
stack.push(0)
left[0]=-1;
for(let i=1;i<arr.length;i++){
    while(stack.length>0 && arr[stack[stack.length-1]]>=arr[i]){         //finding smallest nebour to the left
        stack.pop()
    }
    left[i]=stack.length==0?-1:stack[stack.length-1]
    
    stack.push(i)
}




let right=[]     //nse index on left
stack=[];
stack.push(0)
right[arr.length-1]=arr.length
for(let i=arr.length-1;i>=0;i--){
    while(stack.length>0 && arr[stack[stack.length-1]]>=arr[i]){         //finding smallest nebour to the left
        stack.pop()
    }
    right[i]=stack.length==0?arr.length:stack[stack.length-1]
    
    stack.push(i)
}


maxArea=-999999999999;
for(let i=0;i<arr.length;i++){
    let width=right[i]-left[i]-1;
    let area=width*arr[i]
    if(area>maxArea){
        maxArea=area;
    }
}
console.log(maxArea)
