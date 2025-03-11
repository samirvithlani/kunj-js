var no1 =100
if(no1>0){
    console.log("Number is positive")
}
else{
    console.log("Number is negative")
}

if(no1%2==0){
    console.log("Number is even")
}
else{
    console.log("Number is odd")
}
//difference between == and ===
//== op will check only value if value is same then it will return true
var x =100
var y ="100"
if(x==y){
    console.log("Both are equal")
}
else{
    console.log("Both are not equal")
}

//=== op will check value and datatype if both are same then it will return true
if(x===y){
    console.log("Both are equal")
}
else{
    console.log("Both are not equal")
}