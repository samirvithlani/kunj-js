//string immutable --> "ram" --->
//string data index --> 0

var name = "Ram"
console.log(name)
console.log(name[0])
console.log(name[1])
console.log(name[2])

name[0] = "x"
console.log(name)
//len

var l = name.length
console.log("len...",l)


for(let i=0;i<name.length;i++){
    console.log(name[i])
}

//copy--->

var x ="amit"
var y="";

// for(let i=0;i<x.length;i++){

//     //"" = ""+a ="a"
//     //"a" = "a"+m
//      y = y + x[i]
// }
// console.log("y..",y)


for(let i=x.length-1;i>=0;i--){

    y = y+x[i]
}

console.log(y)

//palndroem -- naman madam racecar

if(x==y){
    console.log("palindrome")
}
else{
    console.log("not palindrome")
}