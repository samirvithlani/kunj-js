const root = document.getElementById("root")//<div>
const h1tag = document.createElement("h1") //<h1></h1>
h1tag.innerHTML = "AHMEDABAD"
root.appendChild(h1tag) //<div><h1><?h1><div>



var users = ["ram","shyam","amit","sumit","kunal","ajay"]
for(let i=0;i<users.length;i++){
    const userH1 = document.createElement("h1") //<h1></h1>
    userH1.innerHTML = users[i]//<h1>ram</h1> //<h1>shyam</h1>...
    root.appendChild(userH1)//<div>...</div>
}

const addElm =()=>{

    const randomIndex = Math.floor(Math.random()*users.length)
    console.log(users[randomIndex])
    users.push(users[randomIndex])
    root.innerHTML = ""
    for(let i=0;i<users.length;i++){
        const userH1 = document.createElement("h1") //<h1></h1>
        userH1.innerHTML = users[i]//<h1>ram</h1> //<h1>shyam</h1>...
        root.appendChild(userH1)//<div>...</div>
    }
    
}