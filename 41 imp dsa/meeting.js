intervals = [ [5,10],[0,30], [15,20] ]
intervals =intervals.sort((a,b)=>(a[0]-b[0]))
console.log(intervals)
function meeting(intervals){
    for(let i=0;i<intervals.length-1;i++){
        if(intervals[i][1]>intervals[i+1][0]){
            return "not possible"
        }
    }
    return "possible"
}
console.log(meeting(intervals))