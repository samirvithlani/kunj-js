
var movieData = {
    name:"chaava",
    price:1200,
    availableSeats:200,
    showTimes:[9,11,1,3,5,7,9]
}

const selectSeat=(seat,time)=>{


    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(seat<movieData.availableSeats && movieData.showTimes.includes(time)){
                res({...movieData,seat,time,screen:1,price:seat*movieData.price})
            }
            else{
                rej(
                    //message:"no seats or time available.."
                     new Error("no seats avaialable.."))
            }
        },3000)
    })


}



const bookMyShow =async()=>{


    try{
    const seat = await selectSeat(10,12)
    console.log(seat)
    }catch(err){
        console.log(err.message)
    }

}
bookMyShow()