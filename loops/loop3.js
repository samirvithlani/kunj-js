//123 -- > no of digits
//123 / 10 --> 12 --no
//12 / 10 --> 1 --no
//1 / 10 --> 0 --yes

//123 //100 = 1
//1 //100 = 0

//123/1000

//1234 //10 = 123 -->1
//123 //10 = 12 -->2
//12 //10 = 1 -->3
//1 //10 = 0 -->4
var no = 123
var digits =0;

while(no>0){
    //console.log(no);
    //no = no/10; 
    no = Math.floor(no/10);
    digits++;
}
console.log(digits); //3
