let n=40;
function checkPrime(n){
    let factor=0
    for(let i=1;i<=n;i++){
        
        if(n%i===0){
            factor++
        }
    }
    if(factor===2){
        console.log("Prime")
    }
    else{
        console.log("Not Prime")
    }
}

checkPrime(n)