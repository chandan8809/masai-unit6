arr=[2,4,5,1,-4,1,4]

Sort(arr)

function Sort(arr){
   let n=arr.length;
   for(let i=0;i<n-1;i++){
       for(let j=0;j<n-i-1;j++){
           if(arr[j]>arr[j+1]){
               [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
           }
       }
   }
   console.log(arr)
}