let str='chandana'

const len=(i=0,str)=>{
    if(str[i]==undefined) return i

    return len(i+1,str)

}
console.log(len(str))