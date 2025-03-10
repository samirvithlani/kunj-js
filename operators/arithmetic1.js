// var no1 = 100
// var no2 = 200


// var no1 = prompt("Enter no1 = ") // "100" 100
// var no2 = prompt("Enter no2 = ") // "200" 200


var no1 = parseInt(prompt("Enter no1 = ")) 
var no2 = parseInt(prompt("Enter no2 = ")) 

console.log("no1 = ",typeof no1) // string
console.log("no2 = ",typeof no2) // string

//  "100" + "200" = "100200"
var ans = no1 + no2
console.log("ans = ",ans) // 300
var ans = no1 - no2
console.log("ans = ",ans) // -100
var ans = no1 * no2
console.log("ans = ",ans) // 20000
var ans = no1 / no2
console.log("ans = ",ans) // 0.5
var ans = no1 % no2
console.log("ans = ",ans) // 100
var ans = no1 ** 2 //power
console.log("ans = ",ans) // 100