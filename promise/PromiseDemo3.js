// function generateLine(){


//     setTimeout(() => {
//         return 100
//     }, 2000);
// }

function generateLine(){

        var promise = new Promise((resolve,reject)=>{
            setTimeout(() => {
                    resolve(100)
            }, 3000);
        })

        return promise
}


var x = generateLine() // x == promise
console.log(x)
x.then((no)=>{
    for(let i=0;i<no;i++){
        console.log("-----",i)
    }
    console.log("loop end...")
})
x.catch((err)=>{
    console.log("err")
})