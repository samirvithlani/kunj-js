// console.log("starts")

// setTimeout(()=>{
//     console.log("called...")
// },3000)

// console.log("ends")

//Promise -->js promise class
//promise 3 stages:pending,fulfiled,rejected
//resolve,reject



const promise = new Promise((resolve,reject)=>{
    //resolve --> reject//
    //resolve("prom has been resolved...")
    setTimeout(()=>{
        resolve("promise has been resolve..")
        //reject("promise has been rejected")
    },3000)
})
console.log(promise)
//if promise get resolve it will find then block or else catch block
promise.then((data)=>{
    console.log(data)
})
promise.catch((err)=>{
    console.log(err)
})

