// function sort012(a,arr_size)
// {
     
//     let lo = 0;
//     let hi = arr_size - 1;
//     let mid = 0;
//     let temp = 0;
//     while (mid <= hi)  //like binery search
//     {
//         if(a[mid] == 0)
//         {
//             temp = a[lo];
//             a[lo] = a[mid];
//             a[mid] = temp;
//             lo++;
//             mid++;
//         }
//         else if(a[mid] == 1)
//         {
//             mid++;
//         }
//         else
//         {
//             temp = a[mid];
//             a[mid] = a[hi];
//             a[hi] = temp;
//             hi--;
//         }
         
//     }
// }
 
// /*Driver function to check for above functions*/
// let arr= [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 ];
 
// let arr_size = arr.length;
// sort012(arr, arr_size);
// console.log(arr)


function sort012(arr){
    let low=0;
    let mid=0;
    let high=arr.length-1;
    
    while(mid<=high){
        if(arr[mid]===0){
            [arr[low],arr[mid]]=[arr[mid],arr[low]]
            low++;
            mid++
        }
        else if(arr[mid]==1){
            mid++
        }
        else{
            [arr[high],arr[mid]]=[arr[mid],arr[high]]
            high--;
           
        }
    }
}

let arr=[0,1,2,0,1,2,0,1,0,1,2,2,1,2,1,2]
sort012(arr,arr.length)
console.log(arr)