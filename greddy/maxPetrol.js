fuel=[1, 2, 3, 4, 5]
dist=[3, 4, 5, 1, 2]

function which_station(fuel,dist){
    let tank=0;
    let station=0;
    for(let i=0;i<5;i++){
        tank=tank+fuel[i]-dist[i]
        if(tank<0){
            tank=0;
            station=i+1
        }
    }
    console.log(station)
}
which_station(fuel,dist)  //ths gives index of station(fuel) where to start