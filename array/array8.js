var users = ["ram","shyam","hari","seeta","geeta"]

// var upperUser =[]

// for(let i=0;i<users.length;i++){

//     upperUser.push(users[i].toUpperCase())
// }
// console.log(upperUser)

//user == users[i]
//map  will return an array with same length
var upperUser = users.map((user)=>{
    return user.toUpperCase() // upperUser.push(user[i])
})
console.log(upperUser)

//var sales = [100,234,560,789,800,1200]  + 10% profit..