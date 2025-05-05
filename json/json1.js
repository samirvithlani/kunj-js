var id = 100
var name = "ram"
var age= 24
//....
console.log(id)
console.log(name)
console.log(age)

//JSON : java script object notation

var student ={
    id:101,
    name:"kunal",
    age:23,
    address:{
        city:"delhi",
        state:"up",
        country:"india",
        pincode: 110001,
        street: "rajiv chowk",
    },
    hobbies:["cricket", "football", "reading"],
}
console.log(student)

console.log(student.id)
console.log(student.name)
console.log(student.age)

console.log(student.address)
console.log(student.address.city)

// console.log(student.city)
// console.log(student.state)
// console.log(student.country)
// console.log(student.pincode)
// console.log(student.street)

for(let i=0;i<student.hobbies.length;i++){
    console.log(student.hobbies[i])
}