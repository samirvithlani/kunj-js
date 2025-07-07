// function generateLine(){

//     var no =0
//     setTimeout(()=>{
//         no =100
//         console.log("no has been generated...")
//     },2000)


//     for(i=0;i<no;i++){
//         console.log("-----------------------------------------------")
//     }
//     console.log("loop end...")



// }

// generateLine()


function geneerateLine(){



    var promise = new Promise((resolve,reject)=>{

        setTimeout(() => {
                resolve(100)
        }, 1000);
    })
    promise.then((no)=>{
        for(let i=0;i<no;i++){
            console.log("-----",i)
        }
        console.log("loop end...")
    })



}
geneerateLine()