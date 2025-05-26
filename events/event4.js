// //var randomNo = Math.random()* 100;
// var randomNo = Math.floor(Math.random()*1000)
// console.log(randomNo)
//image array["rajkot.jps"]

const generateRandomNo = () =>{
    const box = document.getElementById("box")
    var randomNo = Math.floor(Math.random()*1000)
    console.log(randomNo)
    //box.innerHTML = randomNo
    //box.innerHTML  = "<h1>"+randomNo+"</h1>"
    box.innerHTML = `<h1>${randomNo}</h1>`
     
}