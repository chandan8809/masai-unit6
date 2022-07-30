// let arr=[1,2,[5,4],2,1]


// const flattenArr=(arr)=>{
    
//     let newArr=[]

//     arr.reduce((acc,curr)=>{
//         if(!Array.isArray(curr)) acc.push(curr)
//         if(Array.isArray(curr)) newArr=[...acc,...curr]
//     },[])
//     return newArr;
// }

// const parent=()=>{
//     let a=10;
//     return function chile(b){
//         console.log(a+b)
//     }
    
// }

// (parent()(10))

// function memo(inital=0){
//     let value=inital;
//     return function add(n){
//         value=value+n
//         return value
//     }
// }
// let add=memo()
// console.log(add(10))
// console.log(add(10))
// console.log(add(10))
// console.log(add(10))
// console.log(add(10))

//sum of array using rest operator

// function sumNum(...input){
//     let sum=0
//     for(let i of input){
//         sum+=i
//     }
//     return sum
// }

// console.log(sumNum(1,2,4,5,5,4,58,7,4,55,4))


//example of couser toggerler

function toggerler(...input){
    let index=0
    return function togg(){
       
        console.log(input[index])
        index=index+1
        if(index>=input.length){
            index=0
        }

    }
}

let togg=toggerler("on","off")
togg()
togg()
togg()
togg()
togg()
togg()
togg()
togg()
togg()
