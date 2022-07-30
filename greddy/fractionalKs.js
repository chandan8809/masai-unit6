let weight=[10, 20, 30]
let price=[60, 100, 120]
let Cap=50;

//caution solve question first on copy then code it otherwise you will fell demotivated and also unable to solve question

function fractionalKs(weight,price){

    let ks=[];
    let arr=[]
    for(let i in weight){
        ks.push(price[i]/weight[i],weight[i],price[i])
        arr.push(ks)
        ks=[]
    }
 
    arr=arr.sort((a,b)=>{
        return b[0]-a[0]
    })
    console.log(arr)
    let w=0;
    let p=0;
    for(let i=0;i<arr.length;i++){
        w+=arr[i][1]      //0 -w/kg ,1-w,2-p
        p+=arr[i][2]
        console.log(w)
      if(w>Cap){
          w-=arr[i][1]
          p=p-arr[i][2]
          diff=Cap-w
          console.log("poo:",p)
          p+=arr[i][0]*diff;
          console.log("poo:",p)
          break;
     
      }

    }
    console.log(p)
    
}
fractionalKs(weight,price)

// var cw=0;
//     var cval=0
//     for(var i=0;i<n;i++){
//         cw+=array[i][2]
//         cval+=array[i][1]
//         if(cw>c){
//             cw-=array[i][2]
//             cval-=array[i][1]
//             var diff=c-cw;
//             cval=cval+Math.round(diff*array[i][0])
//             break;
//         }
        
//     }
//     console.log(cval)
    