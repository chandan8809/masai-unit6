//it is a 2d row-wise, col-wise sorted array
//search starting point will be (0,3)

let arr=[
    [10,20,30,40],
    [15,25,35,45],
    [27,29,37,48],
    [32,33,39.50]
]

let k=29;  

function search(arr,k){
    let i=0;
    let j=arr[0].length-1;
    while(i>=0 && j>=0){
    
        if(arr[i][j]==k){
            return [i,j]
        }
        else if(arr[i][j]<k){
            i++
        }
        else{
            j--
        }
    }
    return "not found"
}

console.log(search(arr,10))
