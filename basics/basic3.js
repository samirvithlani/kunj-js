var x = 100
let p = 200
console.log("out side of block value of x = ",x)
console.log("out side of block value of p = ",p)
//block...

{
    console.log("inside of block value of x = ",x)
    console.log("inside of block value of p = ",p)
    
}


{
    var m = 150
    let q = 120
    console.log("let q var inside block = ",q)
    console.log("var m var inside block = ",m)
}
//console.log("let q var outside block = ",q) //error...
console.log("var m var outside block = ",m)



var ab = 100
console.log("value of ab = ",ab)
var ab = 200 //redeclaration is possible in var
console.log("value of ab = ",ab)


let pc = 100
console.log("value of pc = ",pc)
//let pc = 200 //redeclaration is not possible in let
console.log("value of pc = ",pc)


let abc = 100
console.log("value of abc = ",abc)
abc = 200
console.log("value of abc = ",abc)



//let const same block...
const IFSC = "SBIN1001"
console.log("value of IFSC = ",IFSC)
//IFSC = "SBIN1002" //error...












