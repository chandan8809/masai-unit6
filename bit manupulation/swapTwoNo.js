
// function swap(a,b){
//     a=a+b;
//     b=a-b;
//     a=a-b;
//     console.log(a,b)

// }

// swap(15,30)

//swap wuthout aritmatic operator

let a=15;
let b=30;
function swapBitwise(a,b){
    a=a^b
    b=a^b
    a=a^b
    console.log(a,b)

}

swapBitwise(15,30)
