let arr=[1,[2,3],[4,[5,6]]]

const flatten=(arr)=>{
    let newArr=arr.reduce((acc,item)=>{
        if(Array.isArray(item)){
            acc=acc.concat(flatten(item))
        }
        else{
            acc.push(item)
        }
        return acc

    },[])
    return newArr

}
console.log(flatten(arr))