const getData = ()=>{


    var promise = new Promise((resolve,reject)=>{

        setTimeout(() => {
                resolve("promise has been resolsved...")
        }, 3000);
    })

    return promise
}


const printData = async()=>{


    // getData().then((data)=>{
    //     console.log(data)
    // })

    const data = await getData()
    console.log(data)
    console.log("end...")


}
printData()