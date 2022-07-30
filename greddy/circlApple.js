let arr=[1,2,2,4,3,2,1]
let cap=6;

//you have to count no of apples can be eaten in a consecutive order(in cirle also)
function eatApple(arr,cap){
    let max=0;
    for(let i=0 ;i<arr.length;i++){
        let sum=0;
        let count=0;
        let j=i;

        while(count<arr.length){     //while oop is throwing count everytime
            sum+=arr[(j%arr.length)]
            if(sum > cap) break;
            count++
            j++
        }
        if(count>max) max=count;
    }
    console.log(max)
}
 eatApple(arr,cap)

