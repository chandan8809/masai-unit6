let price=[100,80,60,70,60,75,85]

function Span(price){
    let span=[];
    let stack=[];        //will store index

    stack.push(0)      //already known
    span[0]=1

    for(let i=1;i<price.length;i++){
        while(stack.length>0 && price[stack[stack.length-1]]<=price[i]){   //finding greatest nebour to the right
            stack.pop()
        }
        // if(stack.length==0){
        //     span[i]=i+1
        // }
        // else{
        //     span[i]=i-stack[stack.length-1]
        // }

        span[i]=stack.length==0? i+1:i-stack[stack.length-1]

        stack.push(i)

    }

    console.log(span)
}

Span(price)