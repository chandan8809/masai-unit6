let arr1=[1,2,3,4,5,5,4,1,2,3,4]
let arr2=[1,2,5,4,2,7,8,9,7]

function intersec(arr1,arr2){
    let res=[]
    for(let i=0;i<arr1.length;i++){
        
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                res.push(arr1[i])
                arr2[j]="";
                break;
            }
        }
    }
    return res

}

console.log(intersec(arr1,arr2))