//123 --> 1+2+3 = 6
//123 % 10 =3
//123 // 10 = 12 % 10 = 2
//12 // 10 = 1 % 10 = 1

var no = 124;
rem =0
sum =0
mul=1
//12>0 - TRUE
//1>0 - TRUE
//0>0 - FALSE
while(no>0){
    rem = no % 10; // 123  % 10 = 3 // 12 %10 = 2 // 1 % 10 = 1
    sum = sum + rem; // 0  = 0 + 3 = 3 // 3 = 3 + 2 = 5 ,5 = 5 + 1 = 6
    mul = mul * rem; // 1 = 1 * 3 = 3 // 3 = 3 * 2 = 6 , 6 = 6 * 1 = 6
    no = Math.floor(no/10); // 123 / 10 = 12 // 12 / 10 = 1 , 1 / 10 = 0
}

console.log(sum); //6
console.log(mul); //6

if(sum == mul){
    console.log("Twin Number");
}