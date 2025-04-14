function demo(){
    console.log("demo funcition called...")
}

demo()


//..let a
function add(a,b){
    
    console.log("a",a)
    console.log("b",b)

    var c = a + b;
    console.log("c  =",c)

}
//add(100,20)
add(10,20)

function sum(a,b,c){

    x = a + b +c
    ///return a + b +  c
    return x;
}

var ans  = sum(10,20,30)
console.log(sum(100,200,300))
console.log("ans = ",ans)