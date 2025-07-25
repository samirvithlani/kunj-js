const storeData = ()=>{
    var email = "ram@gmail.com"
    var id = 1
    var age = 25

    document.cookie = `email=${email}; expires=Fri, 25 July 2025 12:20:00 GMT+0530; path=/`
    document.cookie = `id=${id}; expires=Fri, 25 July 2025 12:20:00 GMT+0530; path=/`
    console.log("Data stored in cookies");

    //how to appy secure and same-site attributes
    document.cookie = `age=${age}; expires=Fri, 25 July 2025 12:20:00 GMT+0530; path=/; secure; SameSite=Strict`
    console.log("Data stored in cookies with secure and SameSite attributes");
}


const getData = ()=>{

    var cookies = document.cookie.split("; ")
    console.log("Cookies: ", cookies);
    var email = cookies.find(cookie => cookie.startsWith("email="))
    var id = cookies.find(cookie => cookie.startsWith("id="))
    var age = cookies.find(cookie => cookie.startsWith("age="))
    console.log(email)
    console.log(email.split("=")[0])


}

