// Given an integer n, we have n strings of length 4. Now we have to remove all those strings which is an anagram of previously appeared string.

// Print the final number of strings left and the strings after the required execution. See the sample testcase for I/O clarifications.

// Note -The final vector of strings is sorted.

let arr=["eodc","odec","code","baca","aabc"]

function findunique(arr){
    let gotIt=new Set()
    let res=[]
    for(let i=0;i<arr.length;i++){
        let str=arr[i];
        str=str.split("").sort().join("")   //sorting the str char
        if(!gotIt.has(str)){
            res.push(arr[i])
            gotIt.add(str)
        }
    }
    console.log(res)
}

findunique(arr)