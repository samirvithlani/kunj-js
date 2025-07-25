const storeinlocal = ()=>{

    var user = {
        id:1,
        name:"ram"
    }
    localStorage.setItem("id",1)
    //localStorage.setItem("user",user)
    localStorage.setItem("user",JSON.stringify(user))

}

const getFromLoca= ()=>{

    var id = localStorage.getItem("id")
    console.log(id)
    const userObjStr = localStorage.getItem("user")
    console.log(userObjStr)
    const userObj = JSON.parse(userObjStr)
    console.log(userObj)
}

 storeinlocal()
// getFromLoca()



const storeinsession = ()=>{

    var user = {
        id:1,
        name:"ram"
    }
    sessionStorage.setItem("id",1)
    //localStorage.setItem("user",user)
    sessionStorage.setItem("user",JSON.stringify(user))

}

const getFromsession= ()=>{

    var id = sessionStorage.getItem("id")
    console.log(id)
    const userObjStr = sessionStorage.getItem("user")
    console.log(userObjStr)
    const userObj = JSON.parse(userObjStr)
    console.log(userObj)
}


const removeData= ()=>{
    //localStorage.removeItem("id")
    //sessionStorage.removeItem("id")
    localStorage.clear()
    sessionStorage.clear()
}


storeinsession()
