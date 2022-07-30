// for( i from 31 to 0 ){

//     if( N&(1<<i) > 0) // Checking for the ith bit using left shift operation
//         print(1);
    
//       else
//         print(0);
//     }

let N=5
for(let i=31;i>=0;i++){
    if(N&(1<<i)>0){
        console.log(1)
    }
    else console.log(0)
}