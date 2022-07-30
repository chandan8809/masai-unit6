let str=["chandan","kumar","vishwakarma","alert"]


function crate(str,n){
    if(n<0){
        return {}
    

    }
    let K=str[n]
    return {[K]:crate(str,n-1)}
}

console.log(crate(str,3))