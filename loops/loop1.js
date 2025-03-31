// for(let i=0;i<=10;i++){
//     console.log(i);
// }


sp = parseInt(prompt("enter starting point"))
ep = parseInt(prompt("enter ending point"))

var evenSum = 0;
var oddSum = 0;

for(let i=sp;i<=ep;i++){

    if(i%2==0){
        console.log("even",i);
        evenSum = evenSum + i;
    }
    else{
        console.log("odd",i);
        oddSum = oddSum + i;
    }

}
console.log("Even Sum is: ",evenSum);
console.log("Odd Sum is: ",oddSum);