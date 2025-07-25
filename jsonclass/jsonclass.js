var user= {
    name:"ram",
    age:12,
    gender:"male"

}

console.log(user)

var userstr = JSON.stringify(user)
console.log(userstr)


var useObj = JSON.parse(userstr)
console.log(useObj)