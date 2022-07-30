n=51, m=68 //gcd=17

const gcd=(n,m)=>{
    if(m%n==0) return n;


    let rem=m%n
    return gcd(rem,n)

}

console.log(gcd(15485,45695))