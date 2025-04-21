function sum(){
    console.log("sum function called....")
}
const sum1= ()=>{
    console.log("sum function called....")
}
sum1()


function add(a,b){

    return a + b;
}

// const add1 = (a,b)=>{
//     return a+b;
// }

const add1 = (a,b)=>a+b

var ans = add(10,20);
console.log(ans)