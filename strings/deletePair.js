// Reduce a string of lowercase characters by doing a series of operations.
//  In each operation, select a pair of adjacent letters that match, and delete them.

let s="aaabbccfff"

console.log(superReducedString(s))
function superReducedString(s) {
    let count=0
    for(let i=0;i<s.length;i++){
        if(s[i]==s[i+1]){
            i=i+1;
            count++
        }
    }
    let res=""
    while(count>0){
        count=0;
        let bag=""
        for(let i=0;i<s.length;i++){
            if(s[i]==s[i+1]){
                i=i+1;
                count++
            }
            else{
                bag+=s[i]
            }
        }
        s=bag;
        res=bag;
        
    }
    if(res.length==0){
        return "Empty String"
    }
    else{
        
     return res
    }

}
