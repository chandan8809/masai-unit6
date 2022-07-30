//rotate arry couter clock wise

let arr=[8,9,10,7,1,4,3]

let d=4;

function rotateAnti(arr,d){
    let i=0;
    let j=d-1;
    while(i<j){
        [arr[i],arr[j]]=[arr[j],arr[i]]
        i++;
        j--;
    }

    i=d;
    j=arr.length-1;
    while(i<j){
        [arr[i],arr[j]]=[arr[j],arr[i]]
        i++;
        j--;
    }

    i=0;
    j=arr.length-1;
    while(i<j){
        [arr[i],arr[j]]=[arr[j],arr[i]]
        i++;
        j--;
    }

}

rotateAnti(arr,d)
console.log(arr)