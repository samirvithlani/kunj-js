try {
  demo();
  //40 files open,,,
  //...........31 -->path exception
  //close...
} catch (err) {
  console.log("demo function is not defined...");
} finally {
  console.log("finally...");
  //close.. dynamically..
  //trascation managament...
}

function safeDiv(a, b) {
  if (b == 0) {
    throw new TypeError("can not divide by zero"); //js engine..
  } else {
    return a / b;
  }
}

try {
  x = safeDiv(10, 0);
  console.log(x);
} catch (err) {
  console.log(err.message);
}



const check = ()=>{
    console.log("1")
    console.log("2")
    console.log("3")
    console.log("4")
    console.log("5")
    demo()
    console.log("6")
    console.log("7")
    console.log("8")
    console.log("9")
    console.log("10")
}
try{
check()
}catch(err){
    console.log(err)
    
}