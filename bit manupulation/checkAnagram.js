let str1="chandan"    //it will fail if str1="aa" str2="bb"
let str2="nandcha"

function checkAnagram(str1,str2){
    let sum=0;
    for(let i=0;i<str1.length;i++){
        
       sum=sum^str1[i].charCodeAt()^str2[i].charCodeAt()
    }
    if(!sum) console.log("anagram")
    else console.log("Not anagram")
}

checkAnagram(str1,str2)
