//longest substring containeing 3 diffrent character
let str="abcccebaaacceafeec"

function longest(str){
    let long;
    let obj={}
    let i=0;
    let j=0;
    while(j<str.length){
        if(obj[str[j]]==undefined){
            obj[str[j]]=1
        }
        else{
            obj[str[j]]++
        }

        if(Object.keys(obj).length<=3){
            j++
        }
        else{
            i++
        }
        console.log(obj)
    }
    console.log(obj)
}
longest(str)
