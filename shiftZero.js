let arr= [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];

function shiftZero(arr,n){
    let count=0;

    for(let i=0;i<n;i++){
        if(arr[i]!=0){
            arr[count]=arr[i]
            count++
        }

    }
    while(count<n){
        arr[count]=0
        count++
    }
    console.log(count)
    return arr

}

console.log(shiftZero(arr,arr.length))