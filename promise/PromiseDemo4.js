function generateLine(){

    var promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
                resolve(100)
        }, 3000);
    })

    return promise
}


generateLine().then((no)=>{
for(let i=0;i<no;i++){
    console.log("-----",i)
}
console.log("loop end...")
}).catch((err)=>{
    console.log("err..")
})