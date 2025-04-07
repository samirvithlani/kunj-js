var data = "amit"
var flag = data.startsWith("a")
console.log(flag)
var flag = data.endsWith("t")
console.log(flag)

var flag = data.includes("a")
console.log(flag)

//index of search...
var flag = data.search("a")
console.log(flag)



var data = "ajay is a good ansa"

var index = data.indexOf("a",5) //8
var index2 = data.indexOf("a",index+1) //9

console.log(index)
console.log(index2)