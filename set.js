//a string is given  and you have to seprate the numbers using set data sturcture

let str="ab1ghs2hdj4js5ksh47jsj6"

//initialize set with values
let set=new Set(["1","2","3","4","5","6","7","8","9","0"])
console.log(set)
let pet=new Set([1,2,3,4,5])

console.log(pet)
let arr=[]
console.log(set)
for(let i=0;i<str.length;i++){
    //console.log(str[i])
    if(set.has(str[i])){
       arr.push(str[i])
    }
}
console.log(arr)


