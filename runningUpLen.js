let str='aaaabbbbcccgggffffhs'

function take(n,str){
    // console.log(n,str)
     bag=""
     for(let i=0;i<n;i++){
         let char=str[i]
         count=1
         for(let j=i+1;j<n;j++){
             if(char==str[j]){
                 count++
                 i++
             }
             else{
                 break;
             }
         }
         bag=bag+char+count
         
         
     }
     console.log(bag)
 }
 take(str.length,str)