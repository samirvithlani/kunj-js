const submitHandler =(event)=>{
    event.preventDefault()

    const gender = document.getElementsByName("gender") //arrat
    for(let i=0;i<gender.length;i++){
        if(gender[i].checked){
            console.log(gender[i].value)
        }
    }
    const hobbies = document.getElementsByName("hobbies")
    for(let i=0;i<hobbies.length;i++){
        if(hobbies[i].checked){
            console.log(hobbies[i].value)
        }
    }
}