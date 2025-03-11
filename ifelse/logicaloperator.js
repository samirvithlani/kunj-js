//&&
//||
//!

//conf 1 && cond 2

//t   t    t
//f   -    f
//t   f    f

//cond 1 || cond 2
// T   -    T
//F   T    T
//F   F    F


var isAlive = true;
var isRetired = false;

if(isAlive && isRetired){
    console.log("You are alive and retired")
}
else{
    console.log("You are not alive and retired")
}

var no =20;
//if(no%2==0 && no>=20){
if(no%2==0 || no>=20){
    console.log("Even and greater than 20")
}
else{
    console.log("Not even and not greater than 20")
}