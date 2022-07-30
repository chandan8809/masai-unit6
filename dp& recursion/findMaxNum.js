let arr=[1,2,3,6,6,15,34,13]

//find the max of array using recursion

function MaxVal(arr,i=0){
    if(i==arr.length-1){
        return(arr[i])
      
    }
    
    let maxInRemArr=MaxVal(arr,i+1);
    if(arr[i]>MaxVal(arr,i+1)){
        return arr[i]
    }
    return MaxVal(arr,i+1)

}

console.log(MaxVal(arr))