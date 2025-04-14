var marks = [22,23,21,20,25]

// for(let i=0;i<marks.length;i++){
//     console.log(marks[i])
// }

console.log(marks)

var x = marks.push(23)
console.log("after push new len of an array = ",x)
console.log(marks)


var removed = marks.pop()
console.log("removing....",removed)
console.log(marks)


marks.unshift(18) //same as push
console.log(marks)

removed = marks.shift() //pop
console.log("removing....",removed)
console.log(marks)