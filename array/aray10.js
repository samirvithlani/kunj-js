var users = ["amit","ajay","ram","shyam","akshay"]

var foundUser = users.find((user)=>{
    return user == "ajay"
})

var foundUser = users.find((user)=>user.length>5)

console.log(foundUser)