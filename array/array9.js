var users = ["amit","ajay","ram","shyam","akshay"]

// var filtUser =[]

// for(let i=0;i<users.length;i++){

//     if(users[i].startsWith("a")){
//         filtUser.push(users[i])
//     }
// }
// console.log(filtUser)

var filtUser = users.filter((user)=>{
//    return user.startsWith("a");
    return user.length>4
}).map((user)=>{
    return user.toUpperCase()
})

console.log(filtUser)


